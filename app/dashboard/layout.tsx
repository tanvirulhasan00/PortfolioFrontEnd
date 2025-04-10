import NavAndSideBar from "@/components/dashboard/NavAndSideBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <NavAndSideBar ch={children} />
    </section>
  );
};

export default DashboardLayout;
