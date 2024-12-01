import Header from "@/components/dashboard/Header";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default DashboardLayout;
