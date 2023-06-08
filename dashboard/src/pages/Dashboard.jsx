import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ActivityChart from "../components/charts/ActivityChart";
import ProductsChart from "../components/charts/ProductsChart";
import ScheduleCard from "../components/card/ScheduleCard";
import InformationCard from "../components/card/InformationCard";

const InfoCardDetails = [
  {
    id: 1,
    title: "Total Revenues",
    value: "$2,129,430",
    icon: "../assets/Total_revenue.svg",
    bgColor: "bg-[#DDEFE0]",
  },
  {
    id: 2,
    title: "Total Transactions",
    value: "1,520",
    icon: "../assets/Total_transaction.svg",
    bgColor: "bg-[#F4ECDD]",
  },
  {
    id: 3,
    title: "Total Likes",
    value: "9,721",
    icon: "../assets/Total_likes.svg",
    bgColor: "bg-[#EFDADA]",
  },
  {
    id: 4,
    title: "Total Users",
    value: "892",
    icon: "../assets/Total_users.svg",
    bgColor: "bg-[#DEE0EF]",
  },
];

const EventCardDetails = [
  {
    id: 1,
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
    borderDesign: "border-[#9BDD7C]",
  },
  {
    id: 2,
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta ",
    borderDesign: "border-[#6972C3]",
  },
];
const Dashboard = () => {
  return (
    <div className="flex p-4 lg:p-8 bg-[#F5F5F5]">
      <Navbar />
      <Sidebar />
      <div className="w-full p-4  ml-0 md:ml-[20%]  mt-[50px] md:mt-0 mr-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-2xl">Dashboard</h3>
          <div className="flex">
            <div className="relative">
              <div className="absolute pr-3 inset-y-0 right-0 flex items-center pointer-events-none">
                <img src="../assets/Search_icon.svg" alt="Search" />
              </div>
              <input
                type="text"
                id="text"
                className="block w-full py-2 px-4 text-sm rounded-[10px] placeholder-[#B0B0B0]"
                placeholder="search..."
                required
              />
            </div>
            <button className="mx-5">
              <img src="../assets/notify.svg" alt="Notification" />
            </button>
            <button className="mx-5">
              <img src="../assets/Profile_picture.svg" alt="Profile" />
            </button>
          </div>
        </div>
        {/*Info Card Section*/}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {InfoCardDetails.map((ele) => {
            return <InformationCard key={ele.id} info={ele} />;
          })}
        </div>
        <div className="my-12 bg-white p-8 rounded-[20px]">
          <div className="flex flex-col items-cente mb-2">
            <h3 className="font-bold text-lg mb-2">Activites</h3>
            <div className="flex items-center">
              <p className="text-xs text-[#858585] mr-2">May - June 2021</p>
              <img src="../assets/bottem_arrow.svg" alt="Arrow" />
            </div>
          </div>
          <ActivityChart />
        </div>
        <div className="my-10 grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-[20px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Top Products</h3>
              <div className="flex items-center">
                <p className="text-xs text-[#858585] mr-2">May - June 2021</p>
                <img src="../assets/bottem_arrow.svg" alt="Arrow" />
              </div>
            </div>
            <div>
              <ProductsChart />
            </div>
          </div>
          <div className="bg-white p-8 rounded-[20px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Today’s schedule</h3>
              <p className="text-xs text-[#858585]">See All &gt;</p>
            </div>
            <div>
              {EventCardDetails.map((ele) => {
                return <ScheduleCard key={ele.id} info={ele} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
