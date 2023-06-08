import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <div className="bg-black fixed top-0 left-0 w-full md:hidden p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wider">Board.</h1>

        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={handleToggle}
        >
          {opened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div>
        {opened && (
          <div>
            <nav className="my-4 text-white">
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
                <img
                  src="../assets/user_icon.svg"
                  alt="Users"
                  className="mr-3"
                />
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
            <div className="text-white flex ">
              <button className="block text-sm my-2 mr-2">Help</button>
              <button className="block text-sm my-2">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
