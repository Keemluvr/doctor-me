import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    return this.connection.doctor.findMany({ include: { agenda: true } });
  }
}

export const database = new DatabaseService(new PrismaClient());
