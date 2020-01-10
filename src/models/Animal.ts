import { Model, JSONSchema, Modifiers } from "objection";
import Person from "./Person";

export default class Animal extends Model {
  id!: number;
  name!: string;

  owner?: Person;

  // Table name is the only required property.
  static tableName = "animals";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["name"],

    properties: {
      id: { type: "integer" },
      ownerId: { type: ["integer", "null"] },
      name: { type: "string", minLength: 1, maxLength: 255 },
      species: { type: "string", minLength: 1, maxLength: 255 }
    }
  };

  // Modifiers are reusable query snippets that can be used in various places.
  static modifiers: Modifiers = {
    // Our example modifier is a a semi-dumb fuzzy name match. We split the
    // name into pieces using whitespace and then try to partially match
    // each of those pieces to both the `firstName` and the `lastName`
    // fields.
    searchByName(query, name) {
      // This `where` simply creates parentheses so that other `where`
      // statements don't get mixed with the these.
      query.where(query => {
        for (const namePart of name.trim().split(/\s+/)) {
          for (const column of ["name"]) {
            query.orWhereRaw("lower(??) like ?", [
              column,
              namePart.toLowerCase() + "%"
            ]);
          }
        }
      });
    },
    searchBySpecies(query, species) {
      // This `where` simply creates parentheses so that other `where`
      // statements don't get mixed with the these.
      query.where(query => {
        for (const speciesPart of species.trim().split(/\s+/)) {
          for (const column of ["species"]) {
            query.orWhereRaw("lower(??) like ?", [
              column,
              speciesPart.toLowerCase() + "%"
            ]);
          }
        }
      });
    }
  };

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  static relationMappings = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      // The related model.
      modelClass: Person,

      join: {
        from: "animals.ownerId",
        to: "persons.id"
      }
    }
  });
}
