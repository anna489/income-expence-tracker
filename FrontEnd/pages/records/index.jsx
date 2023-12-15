import React from "react";
import Menu from "../../components/Record/menu";
import Container from "../../components/Record/container";
import DashNav from "@/components/DashNav";

const Record = () => {
  return (
    <div className="px-[100px] bg-[#F3F4F6] h-full ">
      <DashNav />
      <div className="flex ">
        <Menu />
        <Container />
      </div>
    </div>
  );
};

export default Record;
