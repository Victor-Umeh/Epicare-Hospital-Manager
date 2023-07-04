import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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
        className="px-1 absolute right-5 top-[3.3rem]"
        onClick={(e) => {
          e.preventDefault();
          hidden === "password" ? setHidden("text") : setHidden("password");
        }}
      >
        <FontAwesomeIcon
          icon={hidden === "password" ? faEyeSlash : faEye}
          className="text-slate-400"
        />
      </button>
    </label>
  );
};

export default PasswordInput;
