import React from "react";
import DothBlue from "@/components/Doth/DothBlue";
import Down from "@/components/Up&Down/Down";

const Expence = ({ totalExpence }) => {
  return (
    <div className="card-body  ">
      <h2 className="card-title">
        <DothBlue />
        Total Expences
      </h2>
      <div className="border border-full"></div>
      <div>
        {totalExpence > 0 && (
          <span className="font-medium lg:text-4xl md:text-2xl text-xl">
            {totalExpence}₮{console.log(totalExpence)}
          </span>
        )}
      </div>
      <p className="text-[#64748B]">Your Income Amount</p>
      <h2 className="flex ">
        <Down />
        32% from last month
      </h2>
    </div>
  );
};

export default Expence;
