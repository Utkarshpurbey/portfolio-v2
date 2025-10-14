"use client";
import { IRootState } from "../Slice/store";
import { setActiveTab, setIsMenuOpen } from "../Slice/vitalInfo";
import { Tabs } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";
import { IoMdClose } from "react-icons/io";

const MyHeader = () => {
  const { activeTab, isMenuOpen } = useSelector(
    (state: IRootState) => state.vitalInfo
  );
  const reduxDispatch = useDispatch();

  const handleTabClick = (tab: string) => {
    reduxDispatch(setActiveTab(tab));
    reduxDispatch(setIsMenuOpen(false));
  };

  return (
    <div className="relative w-full flex items-center border-b border-borderColor border-t-0 h-10">
      <div className="w-1/2 md:w-1/5 h-full flex items-center border-r border-borderColor px-4">
        utkarsh-purbey
      </div>
      <div className="flex w-1/2 md:w-4/5 justify-end md:justify-between items-center h-full">
        <div className="hidden md:flex cursor-pointer h-full">
          {Tabs?.map((ele, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(ele)}
              className={`h-full flex items-center px-6 
                border-r border-borderColor
                ${activeTab === ele
                  ? "text-white vs-code-400 border-b-2 border-b-[#ffa55f]"
                  : "vs-code-300"
                }`}
            >
              {ele}
            </div>
          ))}
        </div>

        <div className="hidden md:flex h-full items-center px-4 border-l border-borderColor">
          _contact-me
        </div>
        <div className="md:hidden flex items-center px-4 h-full border-l border-borderColor">
          {!isMenuOpen ? <FiMenu
            className="cursor-pointer"
            onClick={() => reduxDispatch(setIsMenuOpen(!isMenuOpen))}
          /> :
            <IoMdClose className="cursor-pointer"
              onClick={() => reduxDispatch(setIsMenuOpen(!isMenuOpen))} />}

        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full z-50">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default MyHeader;
