import React from "react";

const signUpHeader = ({ logo, header, text }) => {
  return (
    <>
      <img className="w-[150px] mb-[8rem]" src={logo} alt="" />
      <h1 className=" font-[600] text-[26px] text-hdFonts">{header}</h1>
      <p className="mb-10 text-md text-slate-700 font-[500]">{text}</p>
    </>
  );
};

export default signUpHeader;
