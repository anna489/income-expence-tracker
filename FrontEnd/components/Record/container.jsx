import React from "react";
import Right from "@/components/Left&Right/Right";
import Left from "@/components/Left&Right/Left";
import AddTransaction from "../AddTransaction";

const Container = () => {
  return (
    <div className="item-center w-[90%] ml-10 justify-between">
      <div className="mt-4 flex justify-between">
        {/* <div className="flex justify- items-center gap-5 ">
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
        </div> */}
        {/* <div>
          <div className="navbar ">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <details>
                    <summary className="text-lg border bg-white">
                      Newest First
                    </summary>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="border p-2 rounded-lg bg-white flex  justify-between">
        <div className="flex gap-4">
          <input type="checkbox" className="checkbox " disabled />
          <p>Select All</p>
        </div>
        <div>
          <p>-35'000</p>
        </div>
      </div> */}
      <div className="mt-6">
        <h2 className="text-lg font-medium">Records</h2>
        <AddTransaction />
      </div>
    </div>
  );
};

export default Container;
