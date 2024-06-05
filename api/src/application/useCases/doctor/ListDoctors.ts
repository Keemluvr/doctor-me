import DatabaseService from "@/infra/services";

export default class ListDoctorUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute() {
    const doctors = await this.database.doctorService.listDoctor();

    if (!doctors) throw new Error("No doctors found");

    return doctors;
  }
}
