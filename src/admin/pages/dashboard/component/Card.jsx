const Card = ({ text, icon, num }) => {
  return (
    <div className="w-[200px] py-6 shadow-3xl">
      <div className="flex items-center justify-center gap-3">
        <p>{text}</p>
        {icon}
      </div>
      <p className="text-center text-lg text-slate-800 font-bold mt-2">{num}</p>
    </div>
  );
};

export default Card;
