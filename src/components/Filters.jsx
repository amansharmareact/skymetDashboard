import React, { useState } from 'react';
import { ChevronDown, ArrowRight, RotateCcw, Search } from 'lucide-react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Filters = () => {
  const [value, setValue] = useState(dayjs());

  return (
<<<<<<< HEAD
    <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 p-5 items-center justify-center md:items-center">
=======
    <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 p-3 items-start md:items-center">
>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
      {/* Select CBG Plant */}
      <div className="flex flex-col w-full md:w-auto min-w-[200px]">
        <label className="text-xs text-gray-500 font-medium mb-1">Select CBG Plant *</label>
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full bg-white">
            <option>Select CBG Plant...</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
        </div>
      </div>

      {/* Current Region */}
<<<<<<< HEAD
      <div className="flex flex-col w-full md:w-auto min-w-[140px] ">
        <label className="text-xs text-gray-500 font-medium mb-1">Current Region *</label>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
=======
  <div className="flex flex-col w-full md:w-auto min-w-[140px]">
        <label className="text-xs text-gray-500 font-medium mb-1">Current Region *</label>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5 pointer-events-none" />
>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
          <input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-1 border border-gray-300 rounded-full text-sm bg-white w-full"
          />
        </div>
<<<<<<< HEAD

=======
>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full md:w-auto min-w-[200px]">
        <label className="text-xs text-gray-500 font-medium mb-1">Date Picker *</label>
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full bg-white">
            <option>7 days</option>
          </select>
<<<<<<< HEAD
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>


=======
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
        </div>
      </div>

>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
      {/* Season Filter */}
      <div className="flex flex-col w-full md:w-auto min-w-[140px]">
        <label className="text-xs text-gray-500 font-medium mb-1">Season Filter *</label>
        <div className="relative">
<<<<<<< HEAD
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
=======
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5 pointer-events-none" />
>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
          <input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-1 border border-gray-300 rounded-full text-sm bg-white w-full"
          />
        </div>
      </div>

<<<<<<< HEAD

      {/* Apply Button */}
      <div className="w-full md:w-auto">
        <div className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium w-full md:w-auto cursor-pointer">
          <div>Apply</div>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>



      {/* Last Synced */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 md:mt-0 ml-auto">
        <div className="bg-white flex items-center gap-1 p-2 cursor-pointer rounded-md shadow-sm">
          <RotateCcw className="w-4 h-4 text-green-700" />
        </div>
        <div className="flex flex-col">
          <span>Last Synced</span>
          <span className="text-gray-700 font-medium">21/08/2025 14:23</span>
        </div>
=======
      {/* Apply Button */}
      <div className="w-full md:w-auto">
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 text-sm font-medium w-full md:w-auto">
          Apply
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Last Synced */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 md:mt-0 ml-auto">
        <RotateCcw className="w-4 h-4 text-green-700" />
        <span>Last Synced</span>
        <span className="text-gray-700 font-medium">21/08/2025 14:23</span>
>>>>>>> c7f6d686141daf47e1d0e20e7fd8ae519c3358b5
      </div>
    </div>
  );
};

export default Filters;
