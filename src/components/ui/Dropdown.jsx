import React from "react";
import Select from "react-select";

const cropOptions = [
  { value: "Soybean", label: "Soybean" },
  { value: "Cotton", label: "Cotton" },
  { value: "Chilli", label: "Chilli" },
  { value: "Maize", label: "Maize" },
  { value: "Sugarcane", label: "Sugarcane" },
  { value: "Paddy", label: "Paddy (Rice)" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "9999px", // fully rounded
    borderColor: "#A0AEC0",
    paddingLeft: "8px",
    paddingRight: "8px",
    boxShadow: state.isFocused ? "0 0 0 1px #7ED957" : "none",
    "&:hover": {
      borderColor: "#CBD5E0",
    },
    fontSize: "14px",
    minHeight: "35px",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#D1FADF",
    borderRadius: "8px",
    padding: "2px 6px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#F0FDF4"
      : state.isFocused
      ? "#F1F5F9"
      : "white",
    color: "black",
    fontWeight: state.isSelected ? 600 : 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
};

const CustomDropdown = ({ selectedCrop, setSelectedCrop }) => {
  return (
    <Select
      options={cropOptions}
      value={cropOptions.find((o) => o.value === selectedCrop)}
      onChange={(selectedOption) => setSelectedCrop(selectedOption.value)}
      styles={customStyles}
      placeholder="Select Crop"
      isSearchable
    />
  );
};

export default CustomDropdown;
