import React from "react";

function DateRibbon() {
  const today = 23; // set today's date dynamically if needed

  const dateData = [
    { day: "Sat", date: 21, dots: ["green"] },
    { day: "Sun", date: 22, dots: ["green"] },
    { day: "Mon", date: 23, dots: ["green"], active: true },
    { day: "Tue", date: 24, dots: ["green"] },
    { day: "Wed", date: 25, dots: ["green"] },
    { day: "Thu", date: 26, dots: ["red", "green"] },
    { day: "Fri", date: 27, dots: ["blue"] },
    { day: "Sat", date: 28, dots: ["blue"] },
    { day: "Sun", date: 29, dots: ["blue"] },
    { day: "Mon", date: 30, dots: ["blue"] },
    { day: "Tue", date: 1, dots: ["red", "blue", "green"] },
    { day: "Wed", date: 2, dots: ["green"] },
    { day: "Thu", date: 3, dots: ["green"] },
    { day: "Fri", date: 4, dots: ["green"] },
  ];

  return (
    <div className="py-6 flex gap-4 w-full overflow-x-auto px-4">
      {dateData.map(({ day, date, dots }, index) => {
        const isToday = date === today;

        return (
          <div
            key={index}
            className={`flex flex-col items-center bg-white bg-opacity-50 border border-[#E5E7EB] shadow-sm px-2 py-1 min-w-[80px] max-w-[110px] rounded-[40px] transition-all
              ${isToday ? "border-[#3B7C0F] border-2" : ""}
            `}
          >
            <div className="text-sm font-medium text-[#252B37] text-center">
              {day} {date}
            </div>

            <div className="flex justify-center mt-1 space-x-1">
              {dots.map((color, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    color === "green"
                      ? "bg-green-500"
                      : color === "blue"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  } bg-opacity-80`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DateRibbon;
