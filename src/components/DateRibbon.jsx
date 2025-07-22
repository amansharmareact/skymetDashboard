import React from "react";

function DateRibbon({ className = "" }) {
  const today = new Date();

  // Dummy dots logic (you can replace this with your own rule later)
  const getDotsForDay = (index) => {
    if (index % 7 === 0) return ["red"];
    if (index % 5 === 0) return ["red", "green"];
    if (index % 3 === 0) return ["blue"];
    return ["green"];
  };

  const dateData = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayDate = date.getDate();

    return {
      day,
      date: dayDate,
      dots: getDotsForDay(i),
      isToday: date.toDateString() === new Date().toDateString(),
    };
  });

  return (
    <div className={`py-[5px] pb-[16px] flex gap-[5px] w-full overflow-x-auto px-[5px] justify-center z-1 ${className}`}>
      {dateData.map(({ day, date, dots, isToday }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center bg-white bg-opacity-50 border shadow-sm px-2 py-1 min-w-[91px] max-w-[110px] rounded-[40px] transition-all
            ${isToday ? "border-[#86CB3C] border-2" : "border-[#E5E7EB]"}
          `}
        >
          <div className="text-sm font-medium text-[#252B37] text-center">
            {day} {date}
          </div>
          <div className="flex justify-center mt-1 space-x-1">
            {dots.map((color, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${color === "green"
                    ? "bg-green-500"
                    : color === "blue"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  } bg-opacity-80`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DateRibbon;
