import { Request, Response } from "express";
import { database } from "@/infra/services/DoctorService";
import DoctorController from "@/application/controller/DoctorController";
import ListDoctorUseCase from "@/application/useCases/doctor/ListDoctors";

export default class DoctorControllerImpl implements DoctorController {
  async listDoctor(req: Request, res: Response) {
    const useCase = new ListDoctorUseCase(database);
    const doctors = await useCase.execute();

    res.status(200).json(doctors);
  }
}
