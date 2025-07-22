import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const StatusFilter = () => {
    const [activeFilter, setActiveFilter] = useState('En Route');

    const statusItems = [
        { id: 'in-progress', label: 'In Progress', color: 'bg-[#669F2A]', bg: 'bg-[#FAFAFA]', border: 'border-[#E9EAEB]', text: 'text-[#669F2A]', },
        { id: 'en-route', label: 'En Route', color: 'bg-[#EF6820]', bg: 'bg-[#FEF6EE]', border: 'border-[#F7B27A]', text: 'text-[#E04F16]', },
        { id: 'completed', label: 'Completed', color: 'bg-[#16B364]', bg: 'bg-[#ECFDF3]', border: 'border-[#ABEFC6]', text: 'text-[#079455]', },
        { id: 'cancelled', label: 'Cancelled', color: 'bg-[#F04438]', bg: 'bg-[#FAFAFA]', border: 'border-[#FECDCA]', text: 'text-[#B42318]' }
    ];

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
                        className={`flex items-center gap-2 px-[6px] py-[4px] rounded-full text-sm font-medium  border whitespace-nowrap
                            ${`${item.bg} ${item.border} ${item.text}`
                            }`}
                    >
                        {/* Status Dot */}
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StatusFilter;