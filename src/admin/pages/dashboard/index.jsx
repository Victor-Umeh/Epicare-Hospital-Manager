import { FiSearch } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
import { PiStethoscope, PiUserListLight } from "react-icons/pi";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

//components
import SideBar from "../../../components/SideBar";
import NavBar from "../../../components/NavBar";
import Card from "./component/Card";
import Table from "../../../components/ui-widgets/TableHead";
import photo from "../../../assets/images/template.jpg";
import TableData from "../../../components/ui-widgets/TableData";

const data = [
  { day: "Monday", Inpatient: 80, Outpatient: 48 },
  { day: "Tuesday", Inpatient: 67, Outpatient: 42 },
  { day: "Wednesday", Inpatient: 98, Outpatient: 46 },
  { day: "Thursday", Inpatient: 77, Outpatient: 118 },
  { day: "Friday", Inpatient: 120, Outpatient: 84 },
  { day: "Saturday", Inpatient: 78, Outpatient: 60 },
  { day: "Sunday", Inpatient: 40, Outpatient: 63 },
];

const AdminDashboard = () => {
  return (
    <main className="">
      <SideBar />

      <section className="w-full h-[140px] fixed top-0 z-20 ml-auto px-6 bg-white border-b border-slate-500">
        <NavBar
          themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
          searchIcon={<FiSearch className="text-2xl text-slate-800" />}
          img={photo}
          headerText="Dashboard"
        />
      </section>

      <section className="w-[68%] ml-auto mr-7 mt-[10rem]">
        <section className="grid grid-cols-4 py-8">
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
        </section>
        {/* bar chart */}
        <section className="mb-8">
          <p className="my-14 text-2xl ">Patient Statistics</p>
          <BarChart width={900} height={450} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis
              type="number"
              domain={[0, 120]}
              // interval={20}
              ticks={[0, 20, 40, 60, 80, 100, 120]}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Inpatient"
              fill="#09BC8A"
              barSize={40}
              margin={{ top: 10, bottom: 10 }}
              barGap={20}
            />
            <Bar
              dataKey="Outpatient"
              fill="#004346"
              barSize={40}
              margin={{ top: 10, bottom: 10 }}
              barGap={20}
            />
          </BarChart>
        </section>
        <section className="pb-[2rem]">
          <p className="my-14 text-2xl ">Recent patients</p>
          <Table data={<TableData />} />
        </section>
      </section>
    </main>
  );
};

export default AdminDashboard;
