import React, { useContext, useEffect } from "react";
import Menu from "../../components/Record/menu";
import Container from "../../components/Record/container";
import DashNav from "@/components/DashNav";
import { TransactionContext } from "../../context/TransactionContext";

const Record = () => {
  const { reFetch, getAllTransaction } = useContext(TransactionContext);
  useEffect(() => {
    console.log("USEEFFECT ajjilav");
    getAllTransaction();
  }, [reFetch]);

  return (
    <div className=" bg-[#F3F4F6] h-full ">
      <DashNav />
      <div className="flex px-[100px]">
        <Menu />
        <Container />
      </div>
    </div>
  );
};

export default Record;
