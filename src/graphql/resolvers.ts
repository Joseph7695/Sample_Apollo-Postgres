import { PersonInput } from "../data/PersonRepository";

//const bcrypt = require("bcryptjs");

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
      { actorIds }: { actorIds: number[] },
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
    addPerson: async (
      _: any,
      { personInput }: { personInput: PersonInput },
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.addPerson(personInput);
    },
    editPerson: async (
      _: any,
      { personInput, personId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.editPerson(personInput, personId);
    },
    removePerson: async (_: any, { personId }: any, { dataSources }: any) => {
      return await dataSources.personRepo.deletePerson(personId);
    },
    addMovie: async (_: any, { movieInput }: any, { dataSources }: any) => {
      return await dataSources.movieRepo.addMovie(movieInput);
    },
    editMovie: async (
      _: any,
      { movieInput, movieId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.movieRepo.editMovie(movieInput, movieId);
    },
    removeMovie: async (_: any, { movieId }: any, { dataSources }: any) => {
      return await dataSources.movieRepo.deleteMovie(movieId);
    },
    addAnimal: async (_: any, { animalInput }: any, { dataSources }: any) => {
      return await dataSources.animalRepo.addAnimal(animalInput);
    },
    editAnimal: async (
      _: any,
      { animalInput, animalId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.animalRepo.editAnimal(animalInput, animalId);
    },
    removeAnimal: async (_: any, { animalId }: any, { dataSources }: any) => {
      return await dataSources.animalRepo.deleteAnimal(animalId);
    },
    addBook: async (_: any, { bookInput }: any, { dataSources }: any) => {
      return await dataSources.bookRepo.addBook(bookInput);
    },
    editBook: async (
      _: any,
      { bookInput, bookId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.bookRepo.editBook(bookInput, bookId);
    },
    removeBook: async (_: any, { bookId }: any, { dataSources }: any) => {
      return await dataSources.bookRepo.deleteBook(bookId);
    },
    addChildToPerson: async (
      _: any,
      { parentId, childId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.addParentToPerson(childId, parentId);
    },
    addActorToMovie: async (
      _: any,
      { personId, movieId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.addParentToPerson(personId, movieId);
    },
    addPetToPerson: async (
      _: any,
      { personId, petId }: any,
      { dataSources }: any
    ) => {
      return await dataSources.personRepo.addPetToPerson(personId, petId);
    }
  }
};
