import Clubs from '../_services/Club.js';


const resolvers = {
  Club: {
   
    Reviews: ({ id }) => Club.getReviews({ id }),
  },
  Query: {
    Club: (_, { id }) => Clubs.find({ id }),
    Clubs: () => Clubs.findAll(),
  },
  Mutation: {
    createClub: (_, {  input }) =>
      Clubs.create({  input }),
    addReview: (_, { clubId, reviewId }) =>
      Clubs.addReview({ clubId, reviewId }),
  },
};
export default resolvers;
