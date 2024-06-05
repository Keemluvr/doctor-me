import { PrismaClient } from "@prisma/client";

export default class AppointmentService {
  constructor(readonly connection: PrismaClient) {}

  createAppointment(patientId: number, doctorId: number, date: Date) {
    return this.connection.appointment.create({
      data: { patientId, doctorId, date },
    });
  }
}
