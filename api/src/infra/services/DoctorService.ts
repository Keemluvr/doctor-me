import { PrismaClient } from "@prisma/client";

export default class DoctorService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    return this.connection.doctor.findMany({ include: { agenda: true } });
  }

  getDoctorById(id: number, includeAgenda: boolean = false) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: { agenda: includeAgenda },
    });
  }
}
