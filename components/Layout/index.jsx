import React from "react";
import DashNav from "@/pages/DashNav";

const Layout = ({ children }) => {
  return (
    <div>
      <DashNav />
      {children}
    </div>
  );
};

export default Layout;
