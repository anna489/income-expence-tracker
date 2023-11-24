import React from "react";
import Eye from "@/components/Logo/Eye";
import Leading from "@/components/Logo/Leading";
import Right from "@/components/Left&Right/Right";
import Left from "@/components/Left&Right/Left";
import HouseCheck from "@/components/In&Out/House";
import Foot from "@/components/In&Out/Foot";
import { FaHome } from "react-icons/fa";
import Menu from "./menu";
import Container from "./container";

const Record = () => {
  return (
    <div className="px-[120px] bg-[#F3F4F6] h-full ">
      <div className="flex ">
        <Menu />
        <Container />
      </div>
    </div>
  );
};

export default Record;
