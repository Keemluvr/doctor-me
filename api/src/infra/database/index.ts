import { PrismaClient } from "@prisma/client";
import DatabaseService from "../services";

const client = new PrismaClient();

export const database = new DatabaseService(client);
