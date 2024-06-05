import { NotFoundError } from "@/infra/helpers/Errors";
import DatabaseService from "@/infra/services";

export default class ListDoctorUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute() {
    const doctors = await this.database.doctorService.listDoctor();

    if (!doctors) throw new NotFoundError("No doctors found");

    return doctors;
  }
}
