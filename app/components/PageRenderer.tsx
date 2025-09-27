"use client";
import { useSelector } from "react-redux";
import { componentAsPerTab } from "../utils/utils";

const PageRenderer = () => {
  const { activeTab } = useSelector((state: any) => state.vitalInfo);
  const ComponentToRender = componentAsPerTab[activeTab];

  return <ComponentToRender />;
};

export default PageRenderer;
