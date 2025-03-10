"use client";
import { ReactNode, useState } from "react";
import down from "../../public/assets/down.svg";
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
        className="flex w-full items-center py-1 cursor-pointer"
        onClick={() => {
          setShouldOpen(!shouldOpen);
        }}
      >
        {shouldOpen ? (
          <Image src={down.src} height={9} width={9} alt={"down"} />
        ) : (
          <div>{">"}</div>
        )}
        <div className={`${shouldOpen ? "text-white" : ""} px-3 text-sm`}>
          {title}
        </div>
      </div>
      {shouldOpen && children}
    </>
  );
};
export default HamburgerItem;
