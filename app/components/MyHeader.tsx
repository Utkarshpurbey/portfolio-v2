"use client";
import { IRootState } from "../Slice/store";
import { setActiveTab } from "../Slice/vitalInfo";
import { Tabs } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

const MyHeader = () => {
  const vitalInfo = useSelector((state: IRootState) => state.vitalInfo);
  const activeTab = vitalInfo.activeTab;
  const reduxDispatch = useDispatch();

  return (
    <div className=" relative border-t-0 w-full  flex items-center border border-[#1e2d3d]">
      {/* Header */}
      <div className="w-1/5 border-r border-[#1e2d3d] px-4">Name</div>
      <div className="flex w-4/5 justify-between pr-4">
        <div className="flex cursor-pointer">
          {Tabs?.map((ele, index) => (
            <div
              key={index}
              className={` ${activeTab ===ele ? "bg-[#1e2d3d] text-white" : ""}  } px-4 border-r-1 border-[#1e2d3d]`}
              onClick={() => reduxDispatch(setActiveTab(ele))}
            >
              {ele}
            </div>
          ))}
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default MyHeader;
