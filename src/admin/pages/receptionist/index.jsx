import React from "react";

const AdminReceptionist = () => {
  return (
    <main className="">
      <SideBar />
      <section className="w-full h-[140px] fixed top-0 z-20 ml-auto px-6 bg-white border-b border-slate-500">
        <NavBar
          themeIcon={<VscColorMode className="text-2xl text-slate-800" />}
          searchIcon={<FiSearch className="text-2xl text-slate-800" />}
          img={photo}
        />
      </section>
      {/* content */}
      <section className="w-[68%] ml-auto mr-7 mt-[10rem]">
        <section className=""></section>
      </section>
    </main>
  );
};

export default AdminReceptionist;
