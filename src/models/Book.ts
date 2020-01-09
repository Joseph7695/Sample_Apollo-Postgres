import { Model, JSONSchema, Modifiers } from "objection";

class Book extends Model {
  id!: number;
  title!: string;
  author!: string;

  // Table name is the only required property.
  static tableName = "books";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["title", "author"],

    properties: {
      id: { type: "integer" },
      title: { type: "string", minLength: 1, maxLength: 255 },
      author: { type: "string", minLength: 1, maxLength: 255 },
    }
  }
};

module.exports = { Book };
