"use client";
import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type Iprops = {
  title: string;
  isOpen: Boolean;
  children: ReactNode;
};
const HamburgerItem = ({ title = "", isOpen = true, children }: Iprops) => {
  const [shouldOpen, setShouldOpen] = useState(isOpen);
  return (
    <>
      <div
        className="flex w-full items-center py-2 cursor-pointer border-b border-borderColor px-4"
        onClick={() => {
          setShouldOpen(!shouldOpen);
        }}
      >
        {shouldOpen ? <FaChevronDown size={10} color="white" /> : <FaChevronRight size={10} />}
        <div className={`${shouldOpen ? "text-white" : ""} px-3 text-sm`}>
          {title}
        </div>
      </div>
      <div className="px-4">{shouldOpen && children}</div>
    </>
  );
};
export default HamburgerItem;
