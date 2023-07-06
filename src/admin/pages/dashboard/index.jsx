import { FiSearch } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
import { Doughnut } from "react-chartjs-2";

//components
import SideBar from "../../../components/SideBar";
import NavBar from "../../../components/NavBar";
import photo from "../../../assets/images/template.jpg";

const AdminDashboard = () => {
  return (
    <main className="">
      <section className="w-[max-content]">
        <SideBar />
      </section>
      <div class="w-full border-b border-slate-700">
        <section className="w-[80%] ml-auto px-2">
          <NavBar
            themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
            searchIcon={<FiSearch className="text-2xl text-slate-800" />}
            img={photo}
          />
        </section>
        {/* <Doughnut data={[20, 60, 50]} /> */}
      </div>
    </main>
  );
};

{
  /* <section className="">
        <NavBar
          className=""
          themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
          searchIcon={<FiSearch className="text-2xl text-slate-800" />}
        />
      </section> */
}

export default AdminDashboard;
