import NumInput from "../../../../components/ui-widgets/NumInput";
import Button from "../../../../components/ui-widgets/Button";
import SignUpHeader from "../../../../components/SignUpHeader";
import SignUpFooter from "../../../../components/SignUpFooter";

const ResetPass = () => {
  return (
    <>
      <SignUpHeader
        header="Reset password"
        text='"For enhanced security, We recommend creating a strong password."'
      />

      <section className="pt-6">
        <form action="">
          <NumInput label="New password" />
          <NumInput label="Confirm new password" mt="mt-7" />
          <Button mt="mt-8" text="Proceed" />
        </form>
        <SignUpFooter
          forgotPass="/forgotpassword"
          signUp="/"
          userLink="notAvailable"
        />
      </section>
    </>
  );
};

export default ResetPass;
