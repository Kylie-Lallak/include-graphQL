import prisma from '../_prisma/client.js';

export default class Clubs {
  // CREATE
  static async create({ input, desc, reviews}) {
    const { name } = input;
    const { desc } = desc
    const club = await prisma.club.create({
      data: {
        desc,
        name,
      },
    });
    return club;
  }

  // READ
  static async find({ id }) {
    return prisma.club.findUnique({ where: { id } });
  }

  static async findAll() {
    return prisma.club.findMany();
  }

  // OTHER
  static async addReview({ clubId, reviewId }) {
    try {
      await prisma.clubToReview.create({
        data: {
          clubId,
          ReviewId,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  static async getReviews({ id }) {
    const reviewIds = await prisma.clubToReview.findMany({
      where: {
        clubId: id,
      },
      select: {
        reviewId: true,
      },
    });
    const reviews = await prisma.review.findMany({
      where: {
        id: {
          in: reviewIds.map((obj) => obj.reviewId),
        },
      },
    });

    return songs;
  }
}
