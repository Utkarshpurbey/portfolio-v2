"use client";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

const PageIndicator = () => {
  const { activeTab, isMobile } = useSelector(
    (state: IRootState) => state.vitalInfo,
  );

  if (!isMobile || activeTab === "_hello") {
    return null;
  }

  return (
    <div
      className="md:hidden w-full
     animate-slideInFromTop"
    >
      <div className="px-5 py-3">
        <span className="text-white text-sm font-mono animate-fadeInIDE">
          {activeTab}
        </span>
      </div>
    </div>
  );
};

export default PageIndicator;
