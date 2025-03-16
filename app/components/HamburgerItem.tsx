"use client";
import { ReactNode, useState } from "react";
import down from "../../public/assets/down.svg";
import right from "../../public/assets/right.svg";
import Image from "next/image";
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
        className="flex w-full items-center py-1 cursor-pointer border-b border-borderColor px-4"
        onClick={() => {
          setShouldOpen(!shouldOpen);
        }}
      >
        <Image
          src={shouldOpen ? down.src : right.src}
          height={10}
          width={10}
          alt={"down"}
        />
        <div className={`${shouldOpen ? "text-white" : ""} px-3 text-sm`}>
          {title}
        </div>
      </div>
      <div className="px-4">{shouldOpen && children}</div>
    </>
  );
};
export default HamburgerItem;
