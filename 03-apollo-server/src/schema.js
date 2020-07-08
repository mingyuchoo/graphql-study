import { gql } from 'apollo-server';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(author: String): [Book]
    sayHi(name: String): String
  }

  type Mutation {
    sayHello(name: String): String
  }
`;

export default typeDefs;
