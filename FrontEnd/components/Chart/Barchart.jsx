import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
export default function Barchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First Dataset",
            data: [
              3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
          {
            data: [
              1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
            ],
            backgroundColor: [
              "rgb(201, 203, 207)",
              "rgb(153, 102, 255)",
              "rgb(54, 162, 235)",
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75,192,192)",
            ],
            borderColor: [
              "rgb(201, 203, 207)",
              "rgb(153, 102, 255)",
              "rgb(54, 162, 235)",
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75,192,192)",
            ],
            borderWidth: 1,
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
  return <canvas ref={chartRef} />;
}
