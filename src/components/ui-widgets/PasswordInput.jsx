import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PasswordInput = ({ type = "password", icon, mt, togglePreview }) => {
  return (
    <label class={`block ${mt} relative`}>
      <span class="text-lg font-medium text-slate-700">Password</span>
      <input
        type={type}
        name="password"
        class="mt-3 px-6 py-3 bg-white text-md text-slate-700 border-2 border-slate-300 placeholder:text-lg placeholder-slate-400 focus:outline-none focus:border focus:border-slate-400 focus:ring-slate-500 w-full rounded-lg focus:ring-1"
        placeholder="Password"
      />
      <button
        className="px-1 absolute right-5 top-[3.3rem]"
        onClick={(e) => {
          e.preventDefault();
          togglePreview();
        }}
      >
        <FontAwesomeIcon icon={icon} className="text-slate-500" />
      </button>
    </label>
  );
};

export default PasswordInput;
