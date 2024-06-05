import "express-async-errors";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import DoctorController from "@/application/controller/DoctorController";
import PatientController from "@/application/controller/PatientController";
import {
  isAuthenticated,
  validateBody,
  validateParams,
} from "./middleware/validationMiddleware";
import { authenticationSchema } from "./validationSchema/authenticationSchema";
import { getDoctorByIdSchema } from "./validationSchema/getDoctorById";
import { getPatientByPhoneSchema } from "./validationSchema/getPatientByPhone";
import { createPatientPatientIdSchema } from "./validationSchema/createPatientPatientId";
import { createAppointmentAgendaIdSchema } from "./validationSchema/createAppointmentAgendaId";

export default class Router {
  app: express.Express;

  constructor(
    readonly doctorController: DoctorController,
    readonly patientController: PatientController
  ) {
    this.app = express();
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());

    this.setRoutes();
  }

  private setRoutes() {
    this.app.get("/", (req, res) => res.send("Hello World"));
    this.app.post(
      "/authenticate",
      validateBody(authenticationSchema),
      this.patientController.authenticate
    );

    // Doctors
    this.app.get("/doctors", this.doctorController.listDoctor);
    this.app.get(
      "/doctor/:id",
      validateParams(getDoctorByIdSchema),
      this.doctorController.getDoctorById
    );

    // Patients
    this.app.post("/patient", this.patientController.createPatient);
    this.app.get(
      "/patient/:phone",
      isAuthenticated,
      validateParams(getPatientByPhoneSchema),
      this.patientController.getPatientByPhone
    );
    this.app.post(
      "/patient/:patientId/appointment",
      isAuthenticated,
      validateParams(createPatientPatientIdSchema),
      validateBody(createAppointmentAgendaIdSchema),
      this.patientController.createAppointment
    );
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
