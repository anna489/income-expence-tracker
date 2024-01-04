import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function PieChart({ pieChartData }) {
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
        labels: pieChartData?.labels,
        datasets: [
          {
            label: "",
            data: pieChartData?.data,
            borderWidth: 2,
            backgroundColor: [
              "#A804AB",
              "#FB8A22",
              "#0166FF",
              "#EAB308",

              "#6F6CF3",
              "#FF4545",
            ],
            hoverBackgroundColor: [
              "#A804AB",
              "#FB8A22",
              "#0166FF",
              "#EAB308",

              "#6F6CF3",
              "#FF4545",
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
    <div className="justify-center flex items-center skeleton">
      <canvas ref={chartRef} style={{ width: "400px", height: "200px" }} />
    </div>
  );
}
