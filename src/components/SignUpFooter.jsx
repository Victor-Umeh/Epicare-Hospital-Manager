import React from "react";

const SignUpFooter = ({ link }) => {
  return (
    <section className="py-8 space-y-7">
      <a className="block text-right text-hoverBtn underline" href="#">
        {link}
      </a>
      <p className="text-center">
        Or
        <a className="inline-block pl-2 text-hoverBtn underline" href="#">
          Sign up
        </a>
      </p>
      <a className="block text-center text-hoverBtn underline" href="#">
        I am a patient
      </a>
    </section>
  );
};

export default SignUpFooter;
