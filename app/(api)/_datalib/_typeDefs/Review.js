import gql from 'graphql-tag';

const typeDefs = gql`
  type Review {
    id: ID!
    title: String!
    description: String!
    rating: float!
    club: ID!
  }

  input ReviewInput {
    title: String!
    description: String!
    rating: float!
    club: ID!
    
  }

  type Query {
    review(id: ID!): Review
    reviews: [Review]
  }

  type Mutation {
    createReview(input: ReviewInput!): Review
  }
`;
export default typeDefs;