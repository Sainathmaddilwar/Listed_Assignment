import React from "react";
import ReactApexChart from "react-apexcharts";
const Options = {
  chart: {
    type: "pie",
  },
  labels: ["Basic", "Custom", "Super"],
  colors: ["#98D89E", "#EE8484", "#F6DC7D"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const ProductsChart = () => {
  const Data = [44, 55, 13];
  return (
    <div id="chart">
      <ReactApexChart options={Options} series={Data} type="pie" width={300} />
    </div>
  );
};

export default ProductsChart;
