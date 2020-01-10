const bcrypt = require("bcryptjs");

// const persons = [
//   { id: 1, firstName: "Joseph" },
//   { id: 2, firstName: "Baka" },
//   { id: 3, firstName: "Mary Ruth" }
// ];

export const resolvers = {
  Query: {
    movies: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.movieRepo.findAllMovies(),
    findMovieByName: async (
      _: any,
      { name }: { name: string },
      { dataSources }: any
    ) => await dataSources.movieRepo.getMovieByName(name),
    findMovieByActor: async (
      _: any,
      { actorIDs }: { actorIDs: number[] },
      { dataSources }: any
    ) => await dataSources.movieRepo.getMovieByName(name),
    books: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.bookRepo.findAllBooks(),
    persons: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.personRepo.findAllPersons(),
    findPersonByName: async (
      _: any,
      { name }: { name: string },
      { dataSources }: any
    ) => await dataSources.personRepo.getPersonByName(name),
    animals: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.animalRepo.findAllAnimals(),
    findAnimalsByName: async (_: any, { name }: any, { dataSources }: any) => {
      return await dataSources.animalRepo.findAnimalsByName(name);
    },
    findAnimalsBySpecies: async (
      _: any,
      { species }: any,
      { dataSources }: any
    ) => {
      return await dataSources.animalRepo.findAnimalsBySpecies(species);
    },
    findAnimalsByOwner: async (
      _: any,
      { ownerId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.animalRepo.findAnimalsByOwner(ownerId);
    }
  },
  Mutation: {
    addPerson: async (_: any, { personInput }: any, { dataSources }: any) => {
      return await dataSources.personRepo.addPerson(personInput);
    },
    editPerson: async (
      _: any,
      { personInput, personID }: any,
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.editPerson(personInput, personID);
    },
    removePerson: async (_: any, { personID }: any, { dataSources }: any) => {
      return await dataSources.personRepo.deletePerson(personID);
    }
  }
};
