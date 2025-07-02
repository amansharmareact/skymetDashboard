import React, { useState } from 'react';
import { ChevronDown, ArrowRight, RotateCcw, Search, CircleQuestionMark } from 'lucide-react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Filters = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 px-5 py-2 items-center justify-between md:items-center">
      {/* Select CBG Plant */}
      <div className="flex flex-col w-full">
        <div className="">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Select CBG Plant <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full bg-white">
              <option>Select CBG Plant...</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Current Region */}
      <div className="flex flex-col w-full">
        <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
          <span>
            Current Region <span className="text-[#1570EF] font-medium">*</span>
          </span>
          <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-1 border border-gray-300 rounded-full text-sm bg-white w-full"
          />
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full">
        <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
          <span>
            Date Picker <span className="text-[#1570EF] font-medium">*</span>
          </span>
          <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
        </label>
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full bg-white">
            <option>7 days</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>


      {/* Season Filter */}
      <div className="flex flex-col w-full">
        <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
          <span>
            Season Filter <span className="text-[#1570EF] font-medium">*</span>
          </span>
          <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-1 border border-gray-300 rounded-full text-sm bg-white w-full"
          />
        </div>
      </div>


      {/* Apply Button */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium w-full md:w-auto cursor-pointer">
          <div>Apply</div>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>



      {/* Last Synced */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 w-full">
        <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm">
          <RotateCcw className="w-4 h-4 text-green-700" />
        </div>
        <div className="flex flex-col">
          <span>Last Synced</span>
          <span className="text-gray-700 font-medium">21/08/2025 14:23</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
