import Appointments from "@/components/templates/appointments";

const metadata = {
  title: "Meus Agendamentos"
};

export default async function AppointmentsPage() {
  return <Appointments />;
}

export { metadata };
