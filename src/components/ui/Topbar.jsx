import React from "react";

const Topbar = () => {
  return (
    <div className="w-full fixed bg-white px-8 py-1 shadow flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img src="/images/logo.svg" alt="logo" className="w-full h-full" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#F7FFF3] border border-[#59B200] rounded-full px-4 py-1 w-[400px]">
        <img src="/images/search-icon.svg" alt="search" className=" mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-sm text-gray-700"
        />
        <div className="flex items-center text-gray-500 text-xs gap-1">
          <img src="/images/command-icon.svg" alt="cmd" />
          <img src="/images/Key.svg" alt="cmd" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <img src="/images/bell.svg" alt="bell" className="w-12 h-12" />

        {/* Profile */}
        <div className="flex items-center bg-white py-[5px] pr-[10px] pl-[4px] rounded-[52px] border border-gray-200 w-[156px] justify-between">
          <img
            src="/images/user.svg"
            alt="user"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-medium text-gray-800">
              Jayesh Patil
            </span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <svg
            className="w-4 h-4 text-gray-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
