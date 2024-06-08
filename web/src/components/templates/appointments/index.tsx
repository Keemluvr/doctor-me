"use client";

import TopNav from "@/components/organisms/topNav";
import { className } from "./styles";

const Appointments = () => {
  return (
    <main className={className.container}>
      <TopNav title="Meus Agendamentos" iconName="arrow-left" />
    </main>
  );
};

export default Appointments;
