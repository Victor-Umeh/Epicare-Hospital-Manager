import { useState } from "react";

const NumInput = ({ label, placeholder, mt, min, max }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const inputVal = event.target.value;
    // Replace non-numeric characters with an empty string
    const numericValue = inputVal.replace(/\D/g, "");
    setValue(numericValue);
  };

  return (
    <label className={`block ${mt}`}>
      <span className="text-lg font-medium text-slate-700">{label}</span>
      <input
        type="text"
        name="name"
        className="mt-3 px-6 py-3 bg-white text-md text-slate-700 border-2 border-slate-300 placeholder:text-lg placeholder-slate-400 focus:outline-none focus:border focus:border-slate-400 focus:ring-slate-500 w-full rounded-lg focus:ring-1"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
    </label>
  );
};

export default NumInput;
