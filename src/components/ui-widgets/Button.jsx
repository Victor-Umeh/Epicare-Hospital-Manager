
const Button = ({
  mt,
  stateBg = "bg-accentGreen",
  text,
  hoverBg = "hover:bg-hoverBtn",
}) => {
  return (
    <button
      className={`w-full ${mt} ${stateBg} ${hoverBg} text-white py-4 rounded-lg text-md transition duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
