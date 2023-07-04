const signUpHeader = ({ header, text }) => {
  return (
    <>
      <h1 className=" font-[600] text-[26px] text-hdFonts">{header}</h1>
      <p className="mb-10 text-md text-slate-700 font-[500]">{text}</p>
    </>
  );
};

export default signUpHeader;
