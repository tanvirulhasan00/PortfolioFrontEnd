import Header from "@/components/Header";

import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default ClientLayout;
