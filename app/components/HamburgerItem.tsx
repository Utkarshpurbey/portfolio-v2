"use client";
import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";

import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

type Iprops = {
  title: string;
  isOpen: Boolean;
  children: ReactNode;
};
const HamburgerItem = ({ title = "", isOpen = true, children }: Iprops) => {
  const [shouldOpen, setShouldOpen] = useState(isOpen);
  const { isMobile } = useSelector((state: IRootState) => state.vitalInfo);
  return (
    <div className="w-full py-[2px]">
      <div
        className="flex w-full items-center py-[2px]  md:py-2 cursor-pointer border-b border-borderColor px-4 md:bg-transparent bg-[#1e2d3d] rounded w-full"
        onClick={() => {
          setShouldOpen(!shouldOpen);
        }}
      >
        {shouldOpen ? (
          <AiOutlineCaretDown size={14} color="white" />
        ) : (
          <AiOutlineCaretRight
            size={14}
            color={isMobile ? "white" : "#617b96"}
          />
        )}
        <div
          className={`${shouldOpen ? "text-white" : "md:text-[#617b96]"} pl-2 text-lg md:text-base text-white `}
        >
          {title}
        </div>
      </div>
      <div className="px-4">{shouldOpen && children}</div>
    </div>
  );
};
export default HamburgerItem;
