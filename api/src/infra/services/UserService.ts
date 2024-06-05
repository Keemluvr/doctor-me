import { PrismaClient } from "@prisma/client";

export default class UserService {
  constructor(readonly connection: PrismaClient) {}

  createUser(phone: string, password: string) {
    return this.connection.user.create({ data: { phone, password } });
  }
}
