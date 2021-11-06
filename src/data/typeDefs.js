const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type AllName {
    name: String
  }

  type Query {
    allName: [AllName]!
  }
`;

module.exports = typeDefs;
