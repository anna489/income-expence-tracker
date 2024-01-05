import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserProvider";
import Chart from "../components/Chart/Chart";
import DashNav from "../components/DashNav";
import AddTransaction from "../components/AddTransaction";
import Income from "../components/Income";
import Expence from "../components/Expence";
import CashCard from "../components/CashCard";
import myAxios from "../utils/axios";
import { TransactionContext } from "../context/TransactionContext";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [reFetch, setReFetch] = useState(false);
  const { transactions } = useContext(TransactionContext);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    console.log("START");
    const {
      data: { totalIncome, totalExpense },
    } = await myAxios.get("/transactions/totals");
    setTotals({ ...totals, totalIncome, totalExpense });
    console.log("END");
  };

  useEffect(() => {
    console.log("EE");
    getTotalIncExp();
  }, [reFetch]);

  return (
    <div>
      <DashNav />
      <div className="px-[100px] bg-[#F3F4F6] h-full">
        <div className="flex justify-center gap-10 ">
          <CashCard />
          <div className="card w-[32%] h-[300px] bg-base-100 shadow-xl mt-10">
            <Income totalIncome={totals.totalIncome} />
          </div>
          <div className="card w-[31%] h-[300px] bg-base-100 shadow-xl mt-10  ">
            <Expence totalExpence={totals.totalExpense} />
          </div>
        </div>
        <div>
          <Chart />
        </div>
        <div className="card  bg-base-100 shadow-xl mt-10 w-full ">
          <div className="card-body ">
            <h1 className="text-xl card-title">Last Records</h1>
            <div className="border border-full"></div>
            <div>
              <AddTransaction transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
