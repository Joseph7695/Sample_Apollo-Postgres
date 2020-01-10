import Person from "../models/Person";

export default class PersonRepository {
  constructor() {}
  async findAllPersons() {
    return await Person.query();
  }
  async getPersonByName(name: string) {
    return await Person.query()
      .modify("searchByName", name)
      .first();
  }
  async addPetToPerson(personID: number, petID: number) {
    const person = await Person.query().findById(personID);
    const fluffy = await person.$relatedQuery("pets").relate(petID);
    return fluffy;
  }
  async addPerson(person: Person) {
    return await Person.query().insert(person);
  }
  async editPerson(person: Person, personID: number) {
    return await Person.query().patchAndFetchById(personID, person);
  }
  async deletePerson(personID: number) {
    return await Person.query().deleteById(personID);
  }
}
