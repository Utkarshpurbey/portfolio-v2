import React from "react";

const SidePanel = ({
  children,
  width = 25,
  isSticky = false,
}: {
  children: React.ReactNode;
  width?: number;
  isSticky?: boolean;
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
        md:h-full
        flex flex-col
        md:border-r md:border-borderColor
        md:overflow-y-auto overflow-visible
        ${isSticky ? 'sticky top-0 z-10 md:static' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default SidePanel;
