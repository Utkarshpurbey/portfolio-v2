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
    <div className="relative w-full flex items-center border-b border-borderColor border-t-0 h-10">
      <div className="w-1/5 h-full flex items-center border-r border-borderColor px-4">
        utkarsh-purbey
      </div>
      <div className="flex w-4/5 justify-between items-center h-full">
        <div className="flex cursor-pointer h-full">
          {Tabs?.map((ele, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(ele)}
              className={`h-full flex items-center px-6 
                border-r border-borderColor
                ${
                  activeTab === ele
                    ? "text-white vs-code-400 border-b-2 border-b-[#ffa55f]"
                    : "vs-code-300"
                }`}
            >
              {ele}
            </div>
          ))}
        </div>

        <div className="h-full flex items-center px-4 border-l border-borderColor">
          _contact-me
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
