import { useEffect, useRef, useState } from "react";
import { IoCheckmarkSharp, IoSearchOutline } from "react-icons/io5";
import DropdownSelector from "./DropdownSelector";

const crops = [
  "Soybean",
  "Cotton",
  "Chilli",
  "Maize",
  "Cotton",
  "Chilli",
  "Maize",
  "Sugarcane",
  "Paddy (Rice)",
];

export default function CropSelector() {
  const [query, setQuery] = useState("");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const filteredCrops = crops.filter(
    (crop) =>
      crop.toLowerCase().includes(query.toLowerCase()) && crop !== selectedCrop
  );

  const handleSelect = (crop) => {
    setSelectedCrop(crop);
    setQuery("");
    setShowDropdown(false);
  };

  const handleRemove = () => {
    setSelectedCrop(null);
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full h-[40px] max-w-md" ref={dropdownRef}>
      <div
        className={`h-[40px] flex items-center border border-[#ACDC79] rounded-full px-3 py-1 bg-[#F7FFF3] ${
          selectedCrop ? "justify-start" : ""
        }`}
        onClick={() => setShowDropdown(true)}
      >
        <IoSearchOutline className="text-gray-500 mr-2" />
        {selectedCrop ? (
          <DropdownSelector
            selectedCrop={selectedCrop}
            handleRemove={handleRemove}
          />
        ) : (
          <input
            type="text"
            placeholder="Search crop"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none bg-transparent flex-1 text-sm text-gray-700"
            onFocus={() => setShowDropdown(true)}
          />
        )}
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow z-10 max-h-[256px] overflow-auto">
          {filteredCrops.length ? (
            filteredCrops.map((crop, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                onClick={() => handleSelect(crop)}
              >
                {crop}
                {selectedCrop === crop && (
                  <IoCheckmarkSharp className="text-green-600 text-lg" />
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
