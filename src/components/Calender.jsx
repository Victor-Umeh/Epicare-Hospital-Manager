import React, { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  const prevButtonClassName = "prev-button";
  const nextButtonClassName = "next-button";

  const tileClassName = ({ date }) => {
    // Check if it's a Sunday
    if (date.getDay() === "sunday") {
      return "rounded-10 bg-blue-500";
    }
    return "";
  };

  const navigationLabel = ({ date }) => (
    <div className="flex justify-center">
      <span>{date.toLocaleString("default", { month: "long" })}</span>
    </div>
  );

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="w-[35%] h-[440px] mx-auto text-lg mb-12 py-8 border-none shadow-xl"
        tileClassName={tileClassName}
        navigationLabel={navigationLabel}
      />
    </div>
  );
};

export default Calender;
