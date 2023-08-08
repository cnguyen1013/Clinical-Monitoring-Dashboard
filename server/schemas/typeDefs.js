const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Data {
    _id: ID
    Year: Int
    Month: Int
    Day: Int
    Time: Int
    Site: String
    Atlas: String
    Name: String
    counts: Int
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    all_data(year: Int!, name: String): [Data]
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
