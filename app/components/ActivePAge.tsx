"use client";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

const ActiveTab = () => {
  const activeTab = useSelector(
    (state: IRootState) => state.vitalInfo.activeTab
  );
  return <h1>Active Page {activeTab}</h1>;
};
export default ActiveTab;
