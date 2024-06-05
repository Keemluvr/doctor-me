import DatabaseService from "@/infra/services";
import { BussinesError, NotFoundError } from "@/infra/helpers/Errors";

export default class CreateAppointmentUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(patientId: number, agendaId: number) {
    const patient = await this.database.patientService.getPatientById(
      patientId
    );

    if (!patient) throw new NotFoundError("Patient not found");

    const agenda = await this.database.agendaService.getAgendaById(agendaId);

    if (!agenda?.available) {
      throw new BussinesError("Agenda not available for this date");
    }

    await this.database.agendaService.updateAgenda(agenda.id, {
      available: false,
    });

    const appointment =
      await this.database.appointmentService.createAppointment(
        patient.id,
        agenda.doctorId,
        agenda.date
      );

    return appointment;
  }
}
