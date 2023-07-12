import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles.css";

const Calender = ({ style }) => {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={value}
      className={`${style} mx-auto  text-lg text-slate-600 mb-12 py-14 px-4 border-none shadow-xl rounded-md self-center`}
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default Calender;
