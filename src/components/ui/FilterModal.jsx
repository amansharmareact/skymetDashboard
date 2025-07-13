// components/FilterModal.jsx

function FilterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
      style={{ zIndex: "999" }}
    >
      <div className="bg-white rounded-[24px] p-8 w-[558px] shadow-lg relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/filter.svg" className="w-6 h-6" alt="Filter" />
          <h2 className="text-[16px] font-bold"> Filter Report</h2>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[12px] text-[#717680] mb-1 font-bold">
              Tehsil
            </label>
            <select className="w-[243px] h-[45px] border-[#F5F5F5] border rounded-[20px] px-[17px] py-[13px] text-sm text-gray-700">
              <option>Any</option>
              {/* Add other options */}
            </select>
          </div>
          <div>
            <label className="block text-[12px] text-[#717680] mb-1 font-bold">
              Branch
            </label>
            <select className="w-[243px] h-[45px] border-[#F5F5F5] border rounded-[20px] px-[17px] py-[13px] text-sm text-gray-700">
              <option>Any</option>
            </select>
          </div>
          <div>
            <label className="block text-[12px] text-[#717680] mb-1 font-bold">
              Village
            </label>
            <select className="w-[243px] h-[45px] border-[#F5F5F5] border rounded-[20px] px-[17px] py-[13px] text-sm text-gray-700">
              <option>Any</option>
            </select>
          </div>
          <div>
            <label className="block text-[12px] text-[#717680] mb-1 font-bold">
              Society
            </label>
            <select className="w-[243px] h-[45px] border-[#F5F5F5] border rounded-[20px] px-[17px] py-[13px] text-sm text-gray-700">
              <option>Any</option>
            </select>
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-[#669F2A] text-[14px]  text-white rounded-xl py-[13px] font-bold">
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
