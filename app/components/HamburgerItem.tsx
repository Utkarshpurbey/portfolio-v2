"use client";
import { ReactNode, useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";

import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

type Iprops = {
  title: string;
  isOpen: Boolean;
  children: ReactNode;
  closeSignal?: number;
};
const HamburgerItem = ({ title = "", isOpen = true, children, closeSignal }: Iprops) => {
  const [shouldOpen, setShouldOpen] = useState<boolean>(Boolean(isOpen));
  useEffect(() => {
    setShouldOpen(Boolean(isOpen));
  }, [isOpen]);

  useEffect(() => {
    if (typeof closeSignal === 'number') {
      setShouldOpen(false);
    }
  }, [closeSignal]);
  
  const { isMobile } = useSelector((state: IRootState) => state.vitalInfo);
  return (
    <div className="w-full py-1">
      <div
        className="flex w-full items-center py-[2px]  md:py-2 cursor-pointer border-b border-borderColor px-4 md:bg-transparent bg-[#1e2d3d] w-full"
        onClick={() => {
          setShouldOpen(!shouldOpen);
        }}
      >
        <span
          className={`transition-transform duration-300 `}
        >
          {shouldOpen ? (
            <AiOutlineCaretDown size={14} color="white" />
          ) : (
            <AiOutlineCaretRight
              size={14}
              color={isMobile ? "white" : "#617b96"}
            />
          )}
        </span>
        <div
          className={`${shouldOpen ? "text-white" : "md:text-[#617b96]"} pl-2 text-lg md:text-base text-white `}
        >
          {title}
        </div>
      </div>
      <div
        className={`px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out transition-opacity ${
          shouldOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-expanded={shouldOpen}
      >
        {children}
      </div>
    </div>
  );
};
export default HamburgerItem;
