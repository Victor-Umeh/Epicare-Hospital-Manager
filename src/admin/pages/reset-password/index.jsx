import ResetPass from "./component/ResetPass";

//images
import nurse from "../../../assets/images/nurse.jpg";
import logo from "../../../assets/icons/epicare_light_logo.svg";

//components
import SignUpBanner from "../../../components/SignUpBanner";

const AdminResetPass = () => {
  return (
    <main className="h-screen">
      <section className="w-[50%] h-screen relative left-0 flex items-start justify-center">
        <section className="w-[60%] mx-auto pt-[74px]">
          <img className="w-[150px] mb-[8rem]" src={logo} alt="" />
          <ResetPass />
        </section>
      </section>
      <SignUpBanner img={nurse} />
    </main>
  );
};

export default AdminResetPass;
