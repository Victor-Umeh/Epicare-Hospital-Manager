//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//images
import nurse from "../../../assets/images/nurse.jpg";
import logo from "../../../assets/icons/epicare-light-logo.svg";

//components
import SignUpHeader from "../../../components/SignUpHeader";
import SignUpBanner from "../../../components/SignUpBanner";
import SignUpFooter from "../../../components/SignUpFooter";
import TextInput from "../../../components/ui-widgets/TextInput";
import PasswordInput from "../../../components/ui-widgets/PasswordInput";
import Button from "../../../components/ui-widgets/Button";

const AdminLogin = () => {
  return (
    <main className="h-screen">
      <section className="w-[50%] h-screen relative left-0 flex items-start justify-center">
        <section className="w-[60%] mx-auto pt-[80px]">
          <SignUpHeader
            logo={logo}
            header="Create an account"
            text="To proceed, we kindly request that you fill in your details"
          />

          <section className="pt-6">
            <form action="">
              <TextInput
                type="email"
                label="Email address"
                placeholder="example@gmail.com"
              />
              <PasswordInput mt="mt-7" type={"password"} icon={faEye} />
              <Button mt="mt-8" text="Proceed" />
            </form>
            <SignUpFooter link="Forgot password?" />
          </section>
        </section>
      </section>

      <SignUpBanner img={nurse} />
    </main>
  );
};

export default AdminLogin;
