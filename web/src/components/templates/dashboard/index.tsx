"use client";

import Link from "next/link";
import TopNav from "@/components/organisms/topNav";
import { Icon } from "@/components/atoms/icon";
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
