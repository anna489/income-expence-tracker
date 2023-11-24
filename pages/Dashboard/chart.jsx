import React from "react";

const Chart = () => {
  return (
    <div className=" flex justify-center gap-10">
      <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body h-[226px]">
          <h2 className="card-title">Income-Expence</h2>
          <div className="border border-full"></div>
        </div>
      </div>

      <div className="card w-[50%] bg-base-100 shadow-xl mt-10 ">
        <div className="card-body h-[226px]">
          <h2 className="card-title">Chart</h2>
          <div className="border border-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
