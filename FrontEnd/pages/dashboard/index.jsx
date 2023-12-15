import React from "react";
import Doth from "@/components/Doth/DothGreen";
import DothBlue from "@/components/Doth/DothBlue";
import Up from "@/components/Up&Down/Up";
import Down from "@/components/Up&Down/Down";
import Chart from "../../components/Chart/Chart";
import DashNav from "@/components/DashNav";

import HouseCheck from "@/components/In&Out/HouseCheck";

const Dashboard = () => {
  return (
    <div className="px-[300px] bg-[#F3F4F6] h-full">
      <DashNav />
      <div className="flex-wrap flex justify-center gap-10  ">
        <div className="card w-[30%] bg-[#3364d7] h-[300px] shadow-xl   mt-10">
          <img className="w-full h-full absolute" src="/images/Noise.png" />
          <div className="flex gap-2 p-4">
            <img className="bg-white rounded-full" src="/images/Vector.png" />
            <span className="text-white font-bold">Geld</span>
          </div>
          <div className="mt-12">
            <h1 className="text-slate-100 text-lg px-4 py-2 mt-20">Cash</h1>
            <div className="flex gap-">
              <h2 className="text-white text-2xl px-4">10,000,000</h2>
              <svg
                className="absolute right-10"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z"
                  fill="white"
                />
                <path
                  d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z"
                  fill="white"
                />
                <path
                  d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="card w-[30%] h-[300px] bg-base-100 shadow-xl mt-10">
          <div className="card-body  ">
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
        <div className="card w-[30%] h-[300px] bg-base-100 shadow-xl mt-10  ">
          <div className="card-body  ">
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
      <Chart />

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
