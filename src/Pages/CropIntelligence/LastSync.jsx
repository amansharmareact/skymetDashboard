import { RotateCcw } from "lucide-react";
import React from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const LastSync = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full lg:w-[540px]">
      {/* Left: Sync Status */}
      <div className="flex items-center gap-3">
        <div className="border border-[#ACDC79] bg-white rounded-md p-1 w-[36px] h-[36px] flex items-center justify-center">
          <img src="/images/RefreshIcon.svg" className="w-[20px] h-[20px] text-green-700" />
        </div>
        <div>
          <p className="text-sm text-[#3F4857] font-medium">
            Last Sync Status
          </p>
          <p className="text-xs text-[#6C737F]">Updated 3 hrs ago</p>
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 cursor-pointer">
        {/* Expand Icon */}
        <AiOutlineExpandAlt className="w-[20px] h-[20px]" />

        {/* Close Icon */}
        <IoMdClose className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default LastSync;
