import React from "react";
import Right from "@/components/Left&Right/Right";
import Left from "@/components/Left&Right/Left";
import HouseCheck from "@/components/In&Out/House";
import Foot from "@/components/In&Out/Foot";

const Container = () => {
  const Todays = [
    {
      title: "Lending & Renting",
      time: "10:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "11:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
  ];

  return (
    <div className=" 2 item-center w-[90%] ml-10 justify-between">
      <div className="mt-10 flex justify-between">
        <div className="flex justify- items-center gap-5 ">
          <button className="bg-white h-8 w-8 items-center flex justify-center border rounded">
            <Right />
          </button>
          Last 30 days
          <button
            className="bg-white
       h-8 w-8 items-center flex justify-center border rounded"
          >
            <Left />
          </button>
        </div>
        <div>
          <div className="navbar ">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <details>
                    <summary className="text-lg border bg-white">
                      Newest First
                    </summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border p-2 rounded-lg bg-white flex  justify-between">
        <div className="flex gap-4">
          <input type="checkbox" className="checkbox " disabled />
          <p>Select All</p>
        </div>
        <div>
          <p>-35'000</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Today</h2>
        <HouseCheck />
        <HouseCheck />
        <Foot />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Yesterday</h2>
        <Foot />
        <Foot />
        <Foot />
        <Foot />
        <Foot />
        <Foot />
      </div>
    </div>
  );
};

export default Container;
