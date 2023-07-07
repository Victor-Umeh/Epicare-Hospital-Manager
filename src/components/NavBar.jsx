const NavBar = ({ themeIcon, searchIcon, img }) => {
  return (
    <header>
      <section className="w-[68%] ml-auto py-[2rem] flex justify-between items-start fixed top-0 right-7">
        <div>
          <h1 className="text-3xl text-slate-800 font-bold mb-4">Dashboard</h1>
          <p className="text-3xl text-[#508991]">Hi, Benson Okaeme</p>
        </div>

        <div className="w-[max-content] flex items-center gap-x-2">
          <p className="text-lg text-slate-800 font-inter mr-6">
            Tuesday, June 2023
          </p>
          <button className="flex items-center justify-center w-10 h-10  hover:bg-gray-100 rounded-full duration-500">
            {themeIcon}
          </button>
          <button className="flex items-center justify-center w-10 h-10  hover:bg-gray-100 rounded-full duration-500">
            {searchIcon}
          </button>
          <div class="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
