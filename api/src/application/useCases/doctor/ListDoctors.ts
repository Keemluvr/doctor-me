import DatabaseService from "@/infra/database/service";

export default class ListDoctorUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute() {
    const doctors = await this.database.listDoctor();

    if (!doctors) throw new Error("No doctors found");

    return doctors;
  }
}
