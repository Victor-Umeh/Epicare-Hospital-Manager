import React from "react";
import SignUpHeader from "../../../../components/SignUpHeader";
import SignUpFooter from "../../../../components/SignUpFooter";
import NumInput from "../../../../components/ui-widgets/NumInput";
import Button from "../../../../components/ui-widgets/Button";

const Auth = () => {
  return (
    <>
      <SignUpHeader
        header="Enter OTP"
        text="A five digit code has been sent to exa****@gmail.com"
      />

      <section className="pt-6">
        <form action="">
          <section className="flex gap-8">
            <NumInput min="1" max="1" />
            <NumInput min="1" max="1" />
            <NumInput min="1" max="1" />
            <NumInput min="1" max="1" />
            <NumInput min="1" max="1" />
          </section>
          <Button mt="mt-8" text="Proceed" />
        </form>
        <SignUpFooter />
      </section>
    </>
  );
};

export default Auth;
