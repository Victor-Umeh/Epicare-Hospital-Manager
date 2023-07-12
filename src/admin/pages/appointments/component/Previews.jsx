import { useState } from "react";

import { ImPlus } from "react-icons/im";
import noRecord from "../../../../assets/icons/no-records.svg";
import DataList from "./DataList";
import img1 from "../../../../assets/images/list (1).jpg";
import img2 from "../../../../assets/images/list (2).jpg";
import img3 from "../../../../assets/images/list (3).jpg";
import img4 from "../../../../assets/images/list (4).jpg";
import img5 from "../../../../assets/images/list (5).jpg";

const Preview = () => {
  const [data, setData] = useState(true);
  return (
    <>
      <div className="flex items-center w-[max-content]">
        <button className="p-2">
          <ImPlus className="text-base text-[#004346]" />
        </button>
        <h2 className="">Victoria Memorial Hospital</h2>
      </div>
      <div className="mt-12 flex flex-col gap-3">
        {data ? (
          <>
            <DataList img={img1} />
            <DataList img={img2} />
            <DataList img={img3} />
            <DataList img={img4} />
            <DataList img={img5} />
            <DataList img={img1} />
            <DataList img={img3} />
            <DataList img={img2} />
          </>
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
