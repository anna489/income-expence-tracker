import React from "react";
import Barchart from "@/components/Chart/Barchart";
import PieChart from "@/components/Chart/Piechart";

const Chart = () => {
  return (
    <div className=" flex justify-center gap-10">
      <div className="card w-[50%] h-[] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body ">
          <h2 className="card-title">Income-Expence</h2>
          <div className="border border-full"></div>
          <div>
            <Barchart />
          </div>
        </div>
      </div>

      <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body">
          <h2 className="card-title">Chart</h2>
          <div className="border border-full flex justify-start item-center"></div>
          <div className="flex justify-start item-center">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
