import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Barchart({ barChartData }) {
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
        labels: barChartData.labels,
        datasets: [
          {
            label: "Income",
            data: barChartData.incomeData,
            backgroundColor: ["#84CC16"],
            borderWidth: 1,
          },
          {
            label: "Expense",
            data: barChartData.expenseData,
            backgroundColor: ["#F97316"],
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
