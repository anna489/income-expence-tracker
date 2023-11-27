import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [20, 20, 20, 20, 20],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 118, 20)",
              "rgb(54, 162, 180)",
            ],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div className="w-[250px] h-[250px]">
      <canvas ref={chartRef} style={{ width: "300px", height: "100px" }} />
    </div>
  );
}
