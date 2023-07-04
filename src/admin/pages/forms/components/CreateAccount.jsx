import { useState } from "react";

//components
import SignUpHeader from "../../../../components/SignUpHeader";
import SignUpFooter from "../../../../components/SignUpFooter";
import TextInput from "../../../../components/ui-widgets/TextInput";
import PasswordInput from "../../../../components/ui-widgets/PasswordInput";
import Button from "../../../../components/ui-widgets/Button";

const CreateAccount = () => {
  const [next, setNext] = useState(true);
  return (
    <>
      <SignUpHeader
        header="Create an account"
        text="To proceed, we kindly request that you fill in your details"
      />

      <section className="pt-6">
        {/* Form nextr button */}
        <div className="flex justify-center gap-4 ">
          <button
            className={`${
              next ? "text-slate-800 underline" : "text-slate-400"
            } text-[17px] font-semibold`}
            onClick={() => setNext(true)}
          >
            Personal Info
          </button>
          <button
            className={`${
              next ? "text-slate-400" : "text-slate-800 underline"
            } text-[17px] font-semibold`}
            onClick={() => setNext(false)}
          >
            Hospital info
          </button>
        </div>

        <form action="">
          <section className="flex overflow-x-hidden">
            {/* next 1 */}
            <section
              className={` ${
                next ? "translate-x-0 min-w-full" : "-translate-x-[500%]"
              } transition-all duration-500`}
            >
              <TextInput
                mt="mt-8"
                type="text"
                label="Name"
                placeholder="Your name"
              />
              <TextInput
                mt="mt-8"
                type="email"
                label="Email address"
                placeholder="example@gmail.com"
              />
              <TextInput
                mt="mt-8"
                type="text"
                label="Job title"
                placeholder="Job title"
              />
              <PasswordInput mt="mt-8" />
              <Button mt="mt-10" text="Proceed" stateBg="bg-disabled" />
            </section>

            {/* next 2 */}
            <section
              className={`${
                next
                  ? "translate-x-[500%]"
                  : "-translate-x-[4.6rem] min-w-[98%]"
              } transition-all duration-300`}
            >
              <TextInput
                mt="mt-8"
                type="text"
                label="Name"
                placeholder="Your name"
              />
              <TextInput
                mt="mt-8"
                type="email"
                label="Email address"
                placeholder="example@gmail.com"
              />
              <TextInput
                mt="mt-8"
                type="text"
                label="Job title"
                placeholder="Job title"
              />
              <PasswordInput mt="mt-8" />
              <Button mt="mt-10" text="Proceed" />
            </section>
          </section>
        </form>
        <SignUpFooter />
      </section>
    </>
  );
};

export default CreateAccount;
