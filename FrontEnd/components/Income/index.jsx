import React from "react";
import Doth from "@/components/Doth/DothGreen";
import Up from "@/components/Up&Down/Up";
import { thousandify } from "../../utils";

const Income = ({ totalIncome }) => {
  return (
    <div className="card-body  ">
      <h2 className="card-title">
        <Doth />
        Your Income
      </h2>
      <div className="border border-full"></div>
      <div>
        {totalIncome > 0 && (
          <span className="font-medium lg:text-4xl md:text-2xl text-xl">
            {thousandify(totalIncome)}₮{console.log(totalIncome)}
          </span>
        )}
      </div>
      {/* {!totalIncome && <div className="skeleton h-9 w-full"></div>} */}
      <p className="text-[#64748B]">Your Income Amount</p>
      <h2 className="flex">
        <Up />
        32% from last month
      </h2>
    </div>
  );
};

export default Income;
