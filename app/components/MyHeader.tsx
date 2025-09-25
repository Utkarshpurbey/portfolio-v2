"use client";
import { IRootState } from "../Slice/store";
import { setActiveTab } from "../Slice/vitalInfo";
import { Tabs } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

const MyHeader = () => {
  const { activeTab } = useSelector((state: IRootState) => state.vitalInfo);
  const reduxDispatch = useDispatch();

  const handleTabClick = (tab: string) => {
    reduxDispatch(setActiveTab(tab));
  };

  return (
    <div className="relative border-t-0 w-full flex items-center border border-[#1e2d3d]">
      <div className="w-1/5 border-r-2 border-[#1e2d3d] px-4 py-1">utkarsh-purbey</div>
      <div className="flex w-4/5 justify-between pr-4 items-center">
        <div className="flex cursor-pointer">
          {Tabs?.map((ele, index) => (
            <div
              key={index}
              className={` ${
                activeTab === ele
                  ? "bg-[#1e2d3d] text-white vs-code-400 !border-b-2 !border-[#ffa55f]"
                  : "vs-code-300 border-r-2 border-borderColor"
              } px-4 py-1`}
              onClick={() => handleTabClick(ele)}
            >
              {ele}
            </div>
          ))}
        </div>
        <div className="border-l border-[#1e2d3d] pl-2">_contact-me</div>
      </div>
    </div>
  );
};

export default MyHeader;