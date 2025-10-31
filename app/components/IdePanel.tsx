import Image from "next/image";
import React from "react";

type IdePanelProps = {
  title: string;
  logo?: string | any;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

const IdePanel: React.FC<IdePanelProps> = ({
  title,
  logo,
  children,
  className = "",
  contentClassName = "",
}) => {
  return (
    <div className={`group relative w-full animate-fadeInIDE ${className}`}>
      <div className="relative w-full rounded-lg border border-[#1e2d3d] bg-[#0b1e2b]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#43D9AD]/60 hover:shadow-[0_12px_48px_rgba(67,217,173,0.08)] hover:-translate-y-[2px] will-change-transform">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#132b3a] bg-[#0d2230]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#9aa7b3] text-xs font-mono truncate max-w-[60%] text-center mx-2">{title}</div>
          <div className="pr-2">
            {logo ? (
              <div className="h-6 w-6 rounded-md border border-[#1e2d3d] flex items-center justify-center bg-[#011628]">
                <Image src={logo} alt="logo" height={16} width={16} className="rounded-sm" />
              </div>
            ) : (
              <div className="h-6 w-6" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className={contentClassName}>{children}</div>

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(1000px 200px at 10% -40%, rgba(77,91,206,0.08), transparent 60%), radial-gradient(800px 200px at 120% 120%, rgba(67,217,173,0.08), transparent 60%)",
          }}
        />
      </div>
    </div>
  );
};

export default IdePanel;


