import React from "react";

const TextInput = ({ mt, type, placeholder, label }) => {
  return (
    <label className={`block ${mt}`}>
      <span className="text-lg font-medium text-slate-700">{label}</span>
      <input
        type={type}
        name="password"
        className="mt-3 px-6 py-3 bg-white text-md text-slate-700 border-2 border-slate-300 placeholder:text-lg placeholder-slate-400 focus:outline-none focus:border focus:border-slate-400 focus:ring-slate-500 w-full rounded-lg focus:ring-1"
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
