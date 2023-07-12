import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section>
      <Calendar
        onChange={onChange}
        value={value}
        className="w-[35%] mx-auto text-lg text-slate-600 mb-12 py-12 px-4 border-none shadow-xl rounded-md"
        next2Label={null}
        prev2Label={null}
      />
    </section>
  );
};

export default Calender;
