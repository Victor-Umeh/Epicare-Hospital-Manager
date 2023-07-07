import { Link } from "react-router-dom";

const SignUpFooter = ({ link, forgotPass, signUp, userLink }) => {
  return (
    <section className="py-8 space-y-7">
      <Link
        to="/forgotpassword"
        className="block text-right text-hoverBtn underline"
        href="#"
      >
        {link}
      </Link>
      <p className="text-center">
        Or
        <Link to={signUp} className="inline-block pl-2 text-hoverBtn underline">
          Sign up
        </Link>
      </p>
      <Link to="/" className="block text-center text-hoverBtn underline">
        I am a patient
      </Link>
    </section>
  );
};

export default SignUpFooter;
