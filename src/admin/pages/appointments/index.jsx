import { FiSearch } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
//components
import SideBar from "../../../components/SideBar";
import NavBar from "../../../components/NavBar";
import photo from "../../../assets/images/template.jpg";
import Calender from "../../../components/Calender";
import Preview from "./component/Previews";

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
      <section className="w-[68%] h-[37rem] ml-auto mr-7 mt-[8.7rem]">
        <section className="h-full flex justify-center">
          <section className="w-[50%]">
            <Calender style="my-[4.8rem]" />
          </section>
          <section className="w-[50%] h-[100%] text-2xl font-bold p-4 flex flex-col border-l border-slate-500 overflow-y-auto">
            <Preview />
          </section>
        </section>
      </section>
    </main>
  );
};

export default AdminAppointments;
