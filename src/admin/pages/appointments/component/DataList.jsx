import React from "react";

const DataList = ({ img }) => {
  return (
    <div className="font-inter font-[500] flex items-center leading-5 bg-[#F9F9F9] p-4 pl-8">
      <img
        class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
        src={img}
        alt="Jese Leos image"
      />
      <div>
        <p className="text-[16px] text-[#172A3A]">Daniel Gbenga</p>
        <div className="flex items-center text-[13px] text-[#172A3A]">
          <span>11:00am</span>-<span>12:00pm</span>
        </div>
      </div>
    </div>
  );
};

export default DataList;
