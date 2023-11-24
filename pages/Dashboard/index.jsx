import React from "react";
import Doth from "@/components/Doth/DothGreen";
import DothBlue from "@/components/Doth/DothBlue";
import Up from "@/components/Up&Down/Up";
import Down from "@/components/Up&Down/Down";
import House from "@/components/In&Out/House";
import HouseCheck from "@/components/In&Out/HouseCheck";

const Dashboard = () => {
  return (
    <div className="px-[120px] bg-[#F3F4F6] h-full">
      <div className="flex justify-center gap-10  flex-wrap ">
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <div className="card-body h-[219.659px] w-[384.124px] ">
            <h2 className="card-title">Card title!</h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <div className="card-body h-[219.659px] w-[384.124px] ">
            <h2 className="card-title">
              <Doth />
              Your Income
            </h2>
            <div className="border border-full"></div>
            <h1 className="text-4xl">1,200,000₮</h1>
            <p className="text-[#64748B]">Your Income Amount</p>
            <h2 className="flex">
              <Up />
              32% from last month
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10  ">
          <div className="card-body h-[219.659px] w-[384.124px] ">
            <h2 className="card-title">
              <DothBlue />
              Total Expences
            </h2>
            <div className="border border-full"></div>
            <h1 className="text-4xl">1,200,000₮</h1>
            <p className="text-[#64748B]">Your Income Amount</p>
            <h2 className="flex ">
              <Down />
              32% from last month
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex justify-center gap-10">
        <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
          <div className="card-body h-[226px]">
            <h2 className="card-title">Income-Expence</h2>
            <div className="border border-full"></div>
          </div>
        </div>
        {/* Chart */}
        <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
          <div className="card-body h-[226px]">
            <h2 className="card-title">Chart</h2>
            <div className="border border-full"></div>
          </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl mt-10 w-full ">
        <div className="card-body ">
          <h1 className="text-xl card-title">Last Records</h1>
          <div className="border border-full"></div>
          <div>
            <HouseCheck />
            <div className="border border-full"></div>
            <HouseCheck />
            <div className="border border-full"></div>
            <HouseCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
