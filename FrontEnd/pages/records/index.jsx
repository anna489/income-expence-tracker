import React, { useContext, useEffect } from "react";
import Menu from "../../components/Record/menu";
import Container from "../../components/Record/container";
import DashNav from "@/components/DashNav";
import { TransactionContext } from "../../context/TransactionContext";
import { UserContext } from "../../context/UserProvider";
import { useRouter } from "next/router";

const Record = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { reFetch, getAllTransaction } = useContext(TransactionContext);
  useEffect(() => {
    getAllTransaction();
    if (!user) {
      router.push("/");
    }
  }, [user, reFetch]);

  if (!user) {
    return null;
  }
  // useEffect(() => {
  //   console.log("USEEFFECT ajjilav");
  //   getAllTransaction();
  // }, [reFetch]);

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
