import { Link } from "react-router-dom";

const SignUpFooter = ({ link, forgotPass, signUp, userLink }) => {
  return (
    <section className="py-8 space-y-7">
      <Link
        to={forgotPass}
        className="block text-right text-hoverBtn underline"
        href="#"
      >
        {link}
      </Link>
      <p className="text-center">
        Or
        <Link
          to={signUp}
          className="inline-block pl-2 text-hoverBtn underline"
          href="#"
        >
          Sign up
        </Link>
      </p>
      <Link
        to={userLink}
        className="block text-center text-hoverBtn underline"
        href="#"
      >
        I am a patient
      </Link>
    </section>
  );
};

export default SignUpFooter;
