import Person from "../models/Person";

// interface PersonInputData {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
export interface PersonInput {
  firstName: string;
  lastName: string;
  age: number;
  // personInputData: PersonInputData;
  // petIds: [number];
  // movieIds: [number];
  // childrenIds: [number];
  // parentId: number;
}

export default class PersonRepository {
  constructor() {}
  async findAllPersons() {
    //const query = Person.query();
    return await Person.query().withGraphFetched(
      "[pets, children, parent, movies]"
    );
  }
  async getPersonByName(name: string) {
    return await Person.query()
      .modify("searchByName", name)
      .first();
  }
  async addPetToPerson(personID: number, petID: number) {
    const fluffy = await Person.relatedQuery("pets")
      .for(+personID)
      .relate(+petID);
    return fluffy;
  }
  async addParentToPerson(personID: number, parentID: number) {
    const parent = await Person.relatedQuery("parent")
      .for(+personID)
      .relate(+parentID);
    return parent;
  }
  async addMovieToPerson(personID: number, movieID: number) {
    const parent = await Person.relatedQuery("movie")
      .for(+personID)
      .relate(+movieID);
    return parent;
  }
  async addPerson(personInput: PersonInput) {
    let person = await Person.query().insertAndFetch({ ...personInput });
    // if (personInput.childrenIds !== undefined) {
    //   console.log("???" + person);
    //   this.relatedQuery("children", person.id, personInput.childrenIds);
    // }
    // if (personInput.movieIds !== undefined) {

    // }
    return person;
  }
  async editPerson(personInput: PersonInput, personID: number) {
    //     let graph: any = {};
    //     graph = { ...personInput.personInputData };
    //     if (personInput.childrenIds !== undefined) {
    //       graph.children = this.mapIds(personInput.childrenIds);
    //     }
    //     console.log(`Graph: ${JSON.stringify(graph)}`);
    //     console.log(JSON.stringify(personInput));
    //     console.log(
    //       `Children: ${personInput.childrenIds !== undefined}
    // Movies: ${personInput.movieIds !== undefined}
    // Parent: ${personInput.parentId !== undefined}
    // Pets: ${personInput.petIds !== undefined}`
    //     );
    return await Person.query().patchAndFetchById(
      personID,
      personInput
      //personInput.personInputData
    );
  }
  async deletePerson(personID: number) {
    return await Person.query().deleteById(personID);
  }
  // private mapIds(idArray: number[]): object[] {
  //   return idArray.map(function(id) {
  //     return { id: +id };
  //   });
  // }
  // private async relatedQuery(
  //   relation: string,
  //   parentId: number,
  //   relatedIds: number[]
  // ) {
  //   return await Person.relatedQuery(relation)
  //     .for(parentId)
  //     .relate(relatedIds);
  // }
}
