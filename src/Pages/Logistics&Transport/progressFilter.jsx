import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const StatusFilter = () => {
    const [activeFilter, setActiveFilter] = useState('En Route');

    const statusItems = [
        { id: 'in-progress', label: 'In Progress', color: 'bg-green-500', bg: 'bg-#FAFAFA', border: 'border-[#E9EAEB]', text: 'text-green-700', hover: 'hover:bg-green-100' },
        { id: 'en-route', label: 'En Route', color: 'bg-orange-500', bg: 'bg-[#FEF6EE]', border: 'border-[#F7B27A]', text: 'text-orange-700', hover: 'hover:bg-orange-100' },
        { id: 'completed', label: 'Completed', color: 'bg-green-600', bg: 'bg-[#ECFDF3]', border: 'border-[#ABEFC6]', text: 'text-green-800', hover: 'hover:bg-green-200' },
        { id: 'cancelled', label: 'Cancelled', color: 'bg-red-500', bg: 'bg-[#FAFAFA]', border: 'border-#FECDCA', text: 'text-red-700', hover: 'hover:bg-red-100' }
    ];

    const handleFilterClick = (label) => {
        setActiveFilter(label);
    };

    return (
        <div className="no-scrollbar flex items-center justify-between px-2 py-1 bg-white rounded-xl h-[21.12px] min-h-[56px] overflow-x-auto">
            {/* Filter Icon and Label */}
            <div className="flex items-center gap-2">
                <FiFilter className="text-gray-500" size={20} />
            </div>

            {/* Status Pills */}
            <div className="flex items-center gap-[4px]">
                {statusItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleFilterClick(item.label)}
                        className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap
                            ${activeFilter === item.label
                                ? `${item.bg} ${item.border} ${item.text} shadow`
                                : `${item.bg} border-gray-200 text-gray-600 ${item.hover}`
                            }`}
                        style={{ height: '21.12px' }}
                    >
                        {/* Status Dot */}
                        <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StatusFilter;