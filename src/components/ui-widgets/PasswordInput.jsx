import { useState } from "react";

const PasswordInput = ({ mt }) => {
  const [hidden, setHidden] = useState("password");

  return (
    <label className={`block ${mt} relative`}>
      <span className="text-lg font-medium text-slate-700">Password</span>
      <input
        type={hidden}
        name="password"
        className="mt-3 px-6 py-3 bg-white text-md text-slate-700 border-2 border-slate-300 placeholder:text-lg placeholder-slate-400 focus:outline-none focus:border focus:border-slate-400 focus:ring-slate-500 w-full rounded-lg focus:ring-1"
        placeholder="Password"
      />
      <button
        className="px-1 absolute right-5 top-[3.3rem] cursor-default"
        onClick={(e) => {
          e.preventDefault();
          hidden === "password" ? setHidden("text") : setHidden("password");
        }}
      >
        {/* Conditional icon display */}
        {hidden === "password" ? (
          <svg
            className="w-[23px] h-[23px] text-gray-800 dark:text-white stroke-slate-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ) : (
          <svg
            className="w-[23px] h-[23px] text-gray-800 dark:text-white stroke-slate-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 14"
          >
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4">
              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
            </g>
          </svg>
        )}
      </button>
    </label>
  );
};

export default PasswordInput;
