const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
  # type Person {
  #   id: ID!
  #   firstName: String
  #   #lastName: String
  #   #age: Int
  #   #   pets?: Animal[];
  #   # movies?: Movie[];
  #   # children?: Person[];
  #   # parent?: Person;
  # }

  # type Query {
  #   persons: [Person!]!
  #   #currentUser: User!
  # }

  # # type Mutation {
  # #   # register(username: String!, password: String!): User!
  # #   # login(username: String!, password: String!): LoginResponse!
  # # }

  # type LoginResponse {
  #   token: String
  #   # user: User
  # }
`;

module.exports = typeDefs;
