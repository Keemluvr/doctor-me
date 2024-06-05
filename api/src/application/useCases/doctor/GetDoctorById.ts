import DatabaseService from "@/infra/services";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class GetDoctorByIdUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(id: number) {
    const INCLUDE_AGENDA = true;

    const doctor = await this.database.doctorService.getDoctorById(
      id,
      INCLUDE_AGENDA
    );

    if (!doctor) throw new NotFoundError("No doctor found");

    return doctor;
  }
}
