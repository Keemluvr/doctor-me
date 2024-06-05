import { NotFoundError } from "@/infra/helpers/Errors";
import DatabaseService from "@/infra/services";

export default class GetPatientByPhoneUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(phone: string) {
    const INCLUDE_APPOINTMENT = true;
    const INCLUDE_DOCTOR = true;

    const patient = await this.database.patientService.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENT,
      INCLUDE_DOCTOR
    );

    if (!patient) throw new NotFoundError("No patient found");

    return patient;
  }
}
