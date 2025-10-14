"use client";

import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";
import MyFooter from "./MyFooter";

export default function FooterWrapper() {
  const { isMenuOpen } = useSelector((state: IRootState) => state.vitalInfo);
  return (
    <div className=" w-full  absolute bottom-0 ">
      {!isMenuOpen && <MyFooter />}
    </div>
  );
}
