import React from "react";
import ReactApexChart from "react-apexcharts";
const Options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  xaxis: {
    labels: {
      style: {
        colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  grid: {
    strokeDashArray: 5,
  },
  colors: ["#E9A0A0", "#9BDD7C"],
};
const ActivityChart = () => {
  const Data = [
    {
      name: "Guest",
      data: [5, 7, 3, 10],
    },
    {
      name: "User",
      data: [2, 5, 7, 8],
    },
  ];

  return (
    <ReactApexChart
      options={Options}
      series={Data}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default ActivityChart;
