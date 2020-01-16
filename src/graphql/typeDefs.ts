const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String!
  }
  input BookInput {
    title: String!
    author: String!
  }

  type Animal {
    id: ID!
    ownerId: ID
    name: String!
    species: String!
  }

  input AnimalInput {
    ownerId: ID
    name: String!
    species: String!
  }

  type Movie {
    id: ID!
    name: String!
    actors: [Person!]!
  }
  input MovieInput {
    name: String!
  }

  type Person {
    id: ID!
    firstName: String
    lastName: String
    age: Int
    pets: [Animal!]
    movies: [Movie!]
    children: [Person!]
    parent: Person
  }
  input PersonInput {
    firstName: String
    lastName: String
    age: Int
  }

  type Query {
    persons: [Person!]!
    findPersonByName(name: String!): [Person!]!

    movies: [Movie!]!
    findMovieByName(name: String!): [Movie!]!
    findMovieByActor(actorIds: [ID!]!): [Movie!]!

    books: [Book]

    animals: [Animal!]!
    findAnimalsByName(name: String!): [Animal!]!
    findAnimalsBySpecies(species: String!): [Animal!]!
    findAnimalsByOwner(ownerId: ID!): [Animal!]!
  }

  type Mutation {
    addPetToPerson(personId: ID!, petId: ID!): Boolean
    addChildToPerson(parentId: ID!, childId: ID!): Boolean
    addActorToMovie(personId: ID!, movieId: ID!): Boolean

    addPerson(personInput: PersonInput!): Person
    editPerson(personInput: PersonInput!, personId: ID!): Person
    removePerson(personId: ID!): Boolean!

    addMovie(movieInput: MovieInput!): Movie
    editMovie(movieInput: MovieInput!, movieId: ID!): Movie
    removeMovie(movieId: ID!): Boolean!

    addAnimal(animalInput: AnimalInput!): Animal
    editAnimal(animalInput: AnimalInput!, animalId: ID!): Animal
    removeAnimal(animalId: ID!): Boolean!

    addBook(bookInput: BookInput!): Book
    editBook(bookInput: BookInput!, bookId: ID!): Book
    removeBook(bookId: ID!): Boolean!
  }
`;

module.exports = typeDefs;
