import "../../App.css";

const LegendOverlay = ({ selectedReadiness, setSelectedReadiness }) => {
  const toggleType = (type) => {
    if (selectedReadiness.includes(type)) {
      setSelectedReadiness(selectedReadiness.filter((t) => t !== type));
    } else {
      setSelectedReadiness([...selectedReadiness, type]);
    }
  };
  return (
    <div className="bg-[#9DA4AE]/15 absolute p-4 rounded-xl z-[999] text-white  shadow-[0_2px_8px_rgba(0,0,0,0.4)] w-[220px] backdrop-blur-[6px] border border-[#6C737F] space-y-2 bottom-4 left-4">
      {[
        { type: "low", label: "Low Readiness", color: "bg-[#F04438]" },
        {
          type: "moderate",
          label: "Moderate Readiness",
          color: "bg-[#FAC515]",
        },
        { type: "high", label: "High Readiness", color: "bg-[#17B26A]" },
        {
          type: "inactive",
          label: "No Data / Inactive",
          color: "bg-[#181D27]",
        },
        { type: "rain-risk", label: "Rain Risk Overlay", color: null },
        {
          type: "active",
          label: "Active Village",
          color: "border border-[#00C853] bg-transparent",
        },
        {
          type: "collection-center",
          label: "Collection Center",
          icon: "/images/Location.svg",
        },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedReadiness.includes(item.type)}
            onChange={() => toggleType(item.type)}
          />
          {item.icon ? (
            <img src={item.icon} alt="icon" className="w-5 h-5" />
          ) : item.label === "Rain Risk Overlay" ? null : (
            <div
              className={`w-4 h-4 rounded-full circle ${
                item.color ? item.color : ""
              } ${item.type === "rain-risk" ? "" : "border border-white"}`}
            />
          )}
          <span className="text-white text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default LegendOverlay;
