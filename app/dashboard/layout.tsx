import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1>dash</h1>
      {children}
    </section>
  );
};

export default DashboardLayout;
