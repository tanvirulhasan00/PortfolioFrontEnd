import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-red-400">
      {/* logo */}
      <div className="flex text-white/50">
        <Image src={"/logo.png"} alt="logo" width={14} height={14} />
        <span className="hidden md:block">Portfolio Dashboard</span>
      </div>
      {/* menu */}
    </div>
  );
};

export default Sidebar;
