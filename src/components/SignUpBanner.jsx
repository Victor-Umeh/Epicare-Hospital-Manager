import React from "react";

const SignUpBanner = ({ img }) => {
  return (
    <section className="w-[50%] fixed right-0 top-0">
      <img className="w-[100%]" src={img} alt="" />
    </section>
  );
};

export default SignUpBanner;
