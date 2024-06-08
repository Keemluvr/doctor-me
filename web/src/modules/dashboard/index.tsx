"use client";

import TopNav from "@/components/topNav";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { className } from "./styles";

const Dashboard = () => {
  return (
    <main className={className.container}>
      <TopNav title="DoctorMe">
        <Link href={"/appointments"}>
          <Icon name="appointment" className={className.navItem} />
        </Link>
      </TopNav>
      {/* <Sidebar /> */}
      {/* <List /> */}
    </main>
  );
};

export default Dashboard;
