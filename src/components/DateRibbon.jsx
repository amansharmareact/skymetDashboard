import React from 'react'

function DateRibbon() {
    
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
    { day: "Fri", date: 4, dots: ["green"] }
  ];

  return (
    <div className="flex overflow-x-auto gap-1 p-1  rounded-xl">
      {dateData.map(({ day, date, dots, active }, index) => (
        <div
          key={index}
          className={` items-center  px-[22px] py-[8px] min-w-[79px] h-[40px] rounded-[47px] border text-sm text-[#252B37] shadow-md transition-all hover:border-[#86CB3C] 
          
          `}
        >
          <span className=" text-sm  text-[#252B37]">{day}</span>
          <span className=" text-sm ml-[4px] inline font-medium text-[#252B37]">{date}</span>
          <div className="flex px-[8px] gap-1 ">
            {dots.map((color, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 items-center rounded-full ${
                  color === "green"
                    ? "bg-green-500"
                    : color === "blue"
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};



export default DateRibbon
