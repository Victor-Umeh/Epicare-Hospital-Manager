import { FiSearch } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
//components
import SideBar from "../../../components/SideBar";
import NavBar from "../../../components/NavBar";
import photo from "../../../assets/images/template.jpg";
import Calender from "../../../components/Calender";

const AdminAppointments = () => {
  return (
    <main className="">
      <SideBar />
      <section className="w-full h-[140px] fixed top-0 z-20 ml-auto px-6 bg-white border-b border-slate-500">
        <NavBar
          themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
          searchIcon={<FiSearch className="text-2xl text-slate-800" />}
          img={photo}
          headerText="Appointments"
        />
      </section>
      {/* content */}
      <section className="w-[68%] ml-auto mr-7 mt-[10rem]">
        <section className="">
          <Calender />
        </section>
      </section>
    </main>
  );
};

export default AdminAppointments;
