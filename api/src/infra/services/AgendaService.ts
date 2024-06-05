import { PrismaClient } from "@prisma/client";

export default class AgendaService {
  constructor(readonly connection: PrismaClient) {}

  getAgendaById(id: number) {
    return this.connection.agenda.findUnique({ where: { id } });
  }

  updateAgenda(id: number, data: { available: boolean }) {
    return this.connection.agenda.update({ where: { id }, data });
  }
}
