import { PrismaClient } from "@prisma/client";
import DoctorService from "./DoctorService";
import PatientService from "./PatientService";
import UserService from "./UserService";
import AgendaService from "./AgendaService";
import AppointmentService from "./Appointment";

export default class DatabaseService {
  doctorService: DoctorService;
  patientService: PatientService;
  userService: UserService;
  agendaService: AgendaService;
  appointmentService: AppointmentService;

  constructor(client: PrismaClient) {
    this.doctorService = new DoctorService(client);
    this.patientService = new PatientService(client);
    this.userService = new UserService(client);
    this.agendaService = new AgendaService(client);
    this.appointmentService = new AppointmentService(client);
  }
}
