import { useState } from "react";

import { ImPlus } from "react-icons/im";
import noRecord from "../../../../assets/icons/no-records.svg";

const Preview = () => {
  const [data, setData] = useState(false);
  return (
    <>
      <div className="flex items-center w-[max-content]">
        <button className="p-2">
          <ImPlus className="text-base text-[#004346]" />
        </button>
        <h2 className="">Victoria Memorial Hospital</h2>
      </div>
      <div className="mt-12 flex flex-col">
        {data ? (
          <dataList />
        ) : (
          <div className="flex flex-col items-center self-center mt-[9rem]">
            <img className="w-[68px] mt-auto" src={noRecord} alt="" />
            <p className="text-[18px] mt-5">No appointment created</p>
            <button className="text-base text-gray-800">Tap to create</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Preview;
