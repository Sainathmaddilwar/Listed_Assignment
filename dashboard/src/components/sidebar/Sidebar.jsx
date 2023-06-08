import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black hidden w-[18%] h-[92vh] rounded-[30px] text-white p-6 lg:p-8 xl:p-11 md:flex flex-col justify-between fixed">
      <div className="my-4">
        <h1 className="text-white text-4xl font-bold tracking-wider">Board.</h1>

        <nav className="my-12">
          {" "}
          <div className="flex items-center my-6">
            <img
              src="../assets/dashboard_icon.svg"
              alt="Dashboard"
              className="mr-3"
            />
            <p className="text-[18px]">Dashboard</p>
          </div>
          <div className="flex items-center my-6">
            <img
              src="../assets/transaction_icon.svg"
              alt="Transaction"
              className="mr-3"
            />
            <p className="text-[18px]">Transaction</p>
          </div>
          <div className="flex items-center my-6">
            <img
              src="../assets/schedule_icon.svg"
              alt="Schedules"
              className="mr-3"
            />
            <p className="text-[18px]">Schedules</p>
          </div>
          <div className="flex items-center my-6">
            <img src="../assets/user_icon.svg" alt="Users" className="mr-3" />
            <p className="text-[18px]">Users</p>
          </div>
          <div className="flex items-center my-6">
            <img
              src="../assets/setting_icon.svg"
              alt="Setting"
              className="mr-3"
            />
            <p className="text-[18px]">Setting</p>
          </div>
        </nav>
      </div>

      <div>
        <button className="block text-sm my-3">Help</button>
        <button className="block text-sm my-3">Contact Us</button>
      </div>
    </div>
  );
};

export default Sidebar;
