import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepositories implements FeedbacksRepository {
  async create({ type, comment, screenshot}: FeedbackCreateData) {
    return prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
}