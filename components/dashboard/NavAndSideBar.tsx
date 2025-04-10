import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const NavAndSideBar = ({ ch }: { ch: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* side bar */}
      <div>
        <Sidebar />
      </div>
      {/* nav bar */}
      <div>
        <Navbar />
        {ch}
      </div>
    </div>
  );
};

export default NavAndSideBar;
