//import Person from "../models/Person";

// interface IAuthResponse {
//   refreshToken: String;
//   expired_at: Number;
// }

const persons = [
  { id: 1, firstName: "Joseph" },
  { id: 2, firstName: "Baka" },
  { id: 3, firstName: "Mary Ruth" }
];

export default class PersonRepository {
  constructor() {}
  async findAllPersons() {
    return persons;
    //return await Person.query();
  }
  async getPersonByName(name: String) {
    // return await Person.query().where({
    //   firstName: name
    // });
    //lastName:
  }
}
