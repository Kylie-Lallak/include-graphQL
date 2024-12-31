import gql from 'graphql-tag';

const typeDefs = gql`
  type Club {
    id: ID!
    name: String!
    reviews: [Review]
    rating: Int
  }

  input ClubInput {
    name: String!
  }

  type Query {
    club(id: ID!): Club
    clubs: [Club]
  }

  type Mutation {
    createClub(input: ClubInput!): Club
    addReview(clubId: ID!, reviewId: ID!): Boolean
  }
`;
export default typeDefs;


