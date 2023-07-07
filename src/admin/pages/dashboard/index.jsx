import { FiSearch } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
import { PiStethoscope, PiUserListLight } from "react-icons/pi";

//components
import SideBar from "../../../components/SideBar";
import NavBar from "../../../components/NavBar";
import Card from "./component/Card";
import photo from "../../../assets/images/template.jpg";
// import Chart from "./component/Chart";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import { Tooltip } from "flowbite-react";

const data = [
  { day: "Monday", Inpatient: 60, Outpatient: 45 },
  { day: "Tuesday", Inpatient: 30, Outpatient: 15 },
  { day: "Wednesday", Inpatient: 56, Outpatient: 88 },
  { day: "Thursday", Inpatient: 120, Outpatient: 30 },
  { day: "Friday", Inpatient: 20, Outpatient: 90 },
  { day: "Saturday", Inpatient: 112, Outpatient: 67 },
  { day: "Sunday", Inpatient: 49, Outpatient: 35 },
];

const AdminDashboard = () => {
  return (
    <main className="">
      <section className="w-[max-content]">
        <SideBar />
      </section>
      <div className="w-full">
        <section className="w-[80%] ml-auto px-6 border-b border-slate-700">
          <NavBar
            themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
            searchIcon={<FiSearch className="text-2xl text-slate-800" />}
            img={photo}
          />
        </section>
      </div>
      <section className="w-[80%] ml-auto px-2">
        <div className="flex justify-center gap-[5.5rem] items-center py-8">
          <Card
            text="No. of Doctors"
            icon={<PiStethoscope className="text-xl" />}
            num="25"
          />
          <Card
            text="No. of Beds"
            icon={<PiStethoscope className="text-xl" />}
            num="32"
          />
          <Card
            text="No. of Patients"
            icon={<PiStethoscope className="text-xl" />}
            num="500"
          />
          <Card
            text="No. of Appointment"
            icon={<PiStethoscope className="text-xl" />}
            num="500"
          />
        </div>
        <p className="my-14 text-2xl ml-[7rem]">Patient Statistics</p>
        <BarChart
          className="mx-auto w-full"
          width={1100}
          height={450}
          data={data}
        >
          <CartesianGrid strokeDasharray="6" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Inpatient" fill="#09BC8A" />
          <Bar dataKey="Outpatient" fill="#004346" />
        </BarChart>
      </section>
    </main>
  );
};

export default AdminDashboard;
