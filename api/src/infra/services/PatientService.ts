import { PrismaClient } from "@prisma/client";

export default class PatientService {
  constructor(readonly connection: PrismaClient) {}

  getPatientByPhone(
    phone: string,
    includeAppointment: boolean = false,
    includeDoctor: boolean = false
  ) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointment: !includeAppointment
          ? false
          : { include: { doctor: includeDoctor } },
      },
    });
  }

  getPatientById(id: number) {
    return this.connection.patient.findUnique({ where: { id } });
  }

  createPatient(name: string, phone: string, userId: number) {
    return this.connection.patient.create({ data: { name, phone, userId } });
  }
}
