import { useState } from "react";
//Icons
import { SlCalender, SlUser, SlSettings, SlLogout } from "react-icons/sl";
import { BsGrid1X2, BsBuildings, BsFilter } from "react-icons/bs";
import { PiStethoscope, PiUserListLight } from "react-icons/pi";
import { LiaUserNurseSolid, LiaCommentMedicalSolid } from "react-icons/lia";
import { LuFlaskConical, LuEdit3 } from "react-icons/lu";
import { ImFileText2 } from "react-icons/im";
import {
  // BiChevronUp,
  BiSolidChevronRight,
  BiPlusMedical,
} from "react-icons/bi";
// import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";

import logo from "../assets/icons/epicare_dark_logo.svg";

const menus = [
  { title: "Dashboard", icon: <BsGrid1X2 className="text-xl" /> },
  { title: "Appointment", icon: <SlCalender className="text-xl" /> },
  { title: "Profile", icon: <SlUser className="text-xl" /> },
  {
    title: "Department",
    icon: <BsBuildings className="text-xl" />,
    submenus: [
      { title: "Doctors", icon: <PiStethoscope className="text-2xl" /> },
      { title: "Patients", icon: <PiUserListLight className="text-2xl" /> },
      { title: "Nurse", icon: <LiaUserNurseSolid className="text-2xl" /> },
      {
        title: "Pharmacy",
        icon: <LiaCommentMedicalSolid className="text-2xl" />,
      },
      { title: "Laboratory", icon: <LuFlaskConical className="text-2xl" /> },
      { title: "Accountant", icon: <ImFileText2 className="text-xl" /> },
    ],
  },
  { title: "Settings", icon: <SlSettings className="text-xl" /> },
  {
    title: "Log out",
    icon: <SlLogout className={`text-[18px] rotate-180`} />,
    islogout: true,
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`${
        expanded ? "w-[15%] max-w-[360px] min-w-[350px]" : "w-[4.5rem]"
      } h-screen  bg-accentGreen flex flex-col items-center py-8 fixed top-0 left-0 duration-500`}
    >
      <button
        className="w-10 h-10 p-[8px] bg-slate-300 rounded-full shadow-xl absolute -right-5 top-[8.5rem] flex items-center justify-center opacity-90 duration-700 rotate-180"
        onClick={() => {
          setExpanded(!expanded);
          !open ? setOpen(open) : setOpen(!open);
        }}
      >
        <BiSolidChevronRight
          className={`text-2xl fill-accentGreen  ${
            !expanded && "rotate-180"
          } duration-500`}
        />
      </button>
      <section
        className={`w-[100%] px-[5rem] ${
          !expanded ? "w-[40px] overflow-hidden" : null
        }`}
      >
        <img className="w-[8rem] h-[5rem]" src={logo} alt="" />
      </section>
      <nav
        className={`w-full flex-1 mt-[4rem] pt-[1.5rem] overflow-y-auto overflow-x-hidden ${
          !expanded && "overflow-x-"
        } scrollbar`}
      >
        <ul className="w-full h-full flex flex-col gap-y-6">
          {menus.map((link, index) => (
            <>
              <li
                key={index}
                className={`flex items-center gap-x-5 text-[15px] text-white py-3 pl-[5rem] cursor-pointer ${
                  !expanded && "pl-[1.5rem] py-3"
                }  ${
                  link.islogout && "mt-auto"
                } group hover:bg-[#007075] duration-300`}
              >
                <span>{!link.islogout && link.icon}</span>
                <span
                  className={`${link.islogout && "-ml-5"} ${
                    link.islogout && !expanded && "hidden"
                  }  ${
                    !expanded &&
                    "w-[max-content] absolute text-[10px] text-slate-800 text-left bg-slate-300 px-4 ml-[6rem] py-[5px] invisible  group-hover:ml-[3.3rem] group-hover:visible group-hover:transition-all group-hover:duratio-700 rounded-full"
                  } `}
                >
                  {link.title}
                </span>
                <span
                  className={`${
                    link.islogout && expanded ? "ml-[6.5rem]" : "-ml-4"
                  }`}
                >
                  {link.islogout && link.icon}
                </span>
                <span>
                  {link.submenus && (
                    <MdOutlineArrowDropDown
                      className={`text-3xl ml-3 ${open && "rotate-180"} ${
                        !expanded && "hidden"
                      }`}
                      onClick={() => setOpen(!open)}
                    />
                  )}
                </span>
              </li>

              {/* Submenu */}
              {link.submenus && (
                <ul
                  className={`w-full flex flex-col gap-y-10 ${
                    open ? "" : "hidden"
                  }`}
                >
                  {link.submenus.map((sublink, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-5 text-[15px] text-white pl-[5rem] py-3 cursor-pointer hover:bg-[#007075] duration-300"
                    >
                      <span>{sublink.icon}</span>
                      <span className={link.islogout && "-ml-5"}>
                        {sublink.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
