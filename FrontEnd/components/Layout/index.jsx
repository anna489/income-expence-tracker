import React from "react";
import DashNav from "@/components/DashNav";

const Layout = ({ children }) => {
  return (
    <div>
      <DashNav />
      {children}
    </div>
  );
};

export default Layout;
