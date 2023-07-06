//components
import SignUpHeader from "../../../../components/SignUpHeader";
import SignUpFooter from "../../../../components/SignUpFooter";
import TextInput from "../../../../components/ui-widgets/TextInput";
import PasswordInput from "../../../../components/ui-widgets/PasswordInput";
import Button from "../../../../components/ui-widgets/Button";

const Login = () => {
  return (
    <>
      <SignUpHeader
        header="Log in"
        text="To proceed, we kindly request that you fill in your details"
      />

      <section className="pt-6">
        <form action="">
          <TextInput
            type="email"
            label="Email address"
            placeholder="example@gmail.com"
          />
          <PasswordInput mt="mt-7" type="password" />
          <Button mt="mt-8" text="Proceed" />
        </form>
        <SignUpFooter
          link="Forgot password?"
          forgotPass="/forgotpassword"
          signUp="/"
          userLink="notAvailable"
        />
      </section>
    </>
  );
};

export default Login;
