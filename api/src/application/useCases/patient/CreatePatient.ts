import DatabaseService from "@/infra/services";
import { hashPassword } from "@/infra/helpers/SecurityHelper";
import { BussinesError } from "@/infra/helpers/Errors";

export default class CreatePatientUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(name: string, phone: string, password: string) {
    const patient = await this.database.patientService.getPatientByPhone(phone);

    if (patient) {
      throw new BussinesError("Patient already exists with this phone number");
    }

    const hashedPassword = hashPassword(password);

    const user = await this.database.userService.createUser(
      phone,
      hashedPassword
    );

    const newPatient = await this.database.patientService.createPatient(
      name,
      phone,
      user.id
    );

    return newPatient;
  }
}
