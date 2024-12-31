import Reviews from '../_services/Review.js';

const resolvers = {
  Review: {
    club: () => null,
  },
  Query: {
    review: (_, { id }) => Songs.find({ id }),
    reviews: () => Songs.findAll(),
  },
  Mutation: {
    createReview: (_, { input }) => Reviews.create({ input }),
  },
};
export default resolvers;
