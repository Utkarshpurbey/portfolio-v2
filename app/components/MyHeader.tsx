"use client";
import { useRouter } from "next/navigation";
import { IRootState } from "../Slice/store";
import { setActiveTab } from "../Slice/vitalInfo";
import { Tabs, routeAsPerTab } from "../utils/utils"; // Assuming routeAsPerTab might contain mapping for routes based on tabs
import { useDispatch, useSelector } from "react-redux";

const MyHeader = () => {
  const vitalInfo = useSelector((state: IRootState) => state.vitalInfo);
  const activeTab = vitalInfo.activeTab;
  const reduxDispatch = useDispatch();
  const router = useRouter();

  const handleTabClick = (tab) => {
    reduxDispatch(setActiveTab(tab));
    if (routeAsPerTab[tab]) {
      router.push(routeAsPerTab[tab]); // Navigate to the corresponding route
    }
  };

  return (
    <div className="relative border-t-0 w-full flex items-center border border-[#1e2d3d]">
      <div className="w-1/5 border-r-2 border-[#1e2d3d] px-4">utkarsh-purbey</div>
      <div className="flex w-4/5 justify-between pr-4">
        <div className="flex cursor-pointer">
          {Tabs?.map((ele, index) => (
            <div
              key={index}
              className={` ${
                activeTab === ele
                  ? "bg-[#1e2d3d] text-white vs-code-400 !border-b-2 !border-[#ffa55f]"
                  : "vs-code-300 border-r-2 border-borderColor"
              } px-4`}
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
