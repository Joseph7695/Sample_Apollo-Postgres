const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
import { resolvers } from "./graphql/resolvers";
import { BookRepository } from "./data/BookRepository";
import PersonRepository from "./data/PersonRepository";
import AnimalRepository from "./data/AnimalRepository";

const Knex = require("knex");
const knexConfig = require("../knexfile");

const { Model } = require("objection");

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bookRepo: new BookRepository(),
    personRepo: new PersonRepository(),
    animalRepo: new AnimalRepository()
    //book: Book
  })
});

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: String }) => {
  console.log(`🚀  Server ready at ${url} `);
});
