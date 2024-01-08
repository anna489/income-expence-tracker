import React, { useContext } from "react";
import Barchart from "@/components/Chart/Barchart";
import PieChart from "@/components/Chart/Piechart";
import { TransactionContext } from "../../context/TransactionContext";

const Chart = () => {
  const { barChartData, pieChartData } = useContext(TransactionContext);

  return (
    <div className=" flex justify-center gap-10">
      <div className="card w-[50%] h-[] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body ">
          <h2 className="card-title">Income-Expence</h2>
          <div className="border border-full"></div>
          <div className="flex justify-center items-center mt-10">
            <Barchart barChartData={barChartData} />
          </div>
        </div>
        {/* <button
          className="btn btn-primary w-full"
          onClick={() => {
            getChartData(), console.log("barchartdata", barChartData);
          }}
        >
          bar
        </button> */}
      </div>

      <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body">
          <h2 className="card-title">Chart</h2>
          <div className="border border-full flex justify-start item-center"></div>
          <div className="flex justify-center mt-10 item-center">
            <PieChart pieChartData={pieChartData} />
            {/* <button
              className="btn btn-primary w-full"
              onClick={() => {
                console.log("barchartdata", pieChartData);
              }}
            >
              pie
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
