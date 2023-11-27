import React from "react";
import Menu from "./menu";
import Container from "./container";

const Record = () => {
  return (
    <div className="px-[300px] bg-[#F3F4F6] h-full ">
      <div className="flex ">
        <Menu />
        <Container />
      </div>
    </div>
  );
};

export default Record;
