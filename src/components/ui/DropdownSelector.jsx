import React from "react";
import { IoClose } from "react-icons/io5";

const DropdownSelector = ({ selectedCrop, handleRemove }) => {
  return (
    <div className="flex items-center justify-center h-[24px] pt-1 pr-2 pb-1 pl-[9px] gap-2 border border-[#ACDC79] bg-[#D0F8AB] text-[#326212] font-semibold rounded-[6px] text-sm">
      <span>{selectedCrop}</span>
      <button onClick={handleRemove}>
        <IoClose className="text-[#A4A7AE] w-[12px] h-[12px]" />
      </button>
    </div>
  );
};

export default DropdownSelector;
