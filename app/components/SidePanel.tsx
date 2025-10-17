import React from "react";

const SidePanel = ({
  children,
  width = 25,
}: {
  children: React.ReactNode;
  width?: number;
}) => {
  const getWidthClass = () => {
    if (width === 20) return "md:w-1/5";
    if (width === 25) return "md:w-1/4";
    if (width === 30) return "md:w-[30%]";
    if (width === 33) return "md:w-1/3";
    if (width === 50) return "md:w-1/2";
    return "md:w-1/4";
  };

  return (
    <div
      className={`
        w-full
        ${getWidthClass()}
        h-auto
        md:h-full
        flex flex-col
        md:border-r md:border-borderColor
        md:overflow-y-auto overflow-visible
      `}
    >
      {children}
    </div>
  );
};

export default SidePanel;
