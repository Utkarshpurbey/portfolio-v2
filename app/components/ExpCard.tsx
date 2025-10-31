import Image from "next/image";
import IdePanel from "./IdePanel";

const ExpCard = (props) => {
  return (
    <IdePanel
      title={`${(props.companyName?.toLowerCase?.() || "company")}.exp.ts`}
      logo={props.logo}
      contentClassName="relative grid grid-cols-[auto_1fr] font-mono text-sm"
    >
        {/* editor area with gutter */}
        <div className="relative grid grid-cols-[auto_1fr] font-mono text-sm">
          {/* line numbers gutter */}
          <div className="select-none text-right text-[#3e5566] bg-[#091a25] px-3 py-4 border-r border-[#132b3a]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`ln-${i}`} className="leading-7">{i + 1}</div>
            ))}
          </div>

          {/* code content */}
          <div className="px-4 py-4 text-[#e5e9f0]">
            <div className="text-[#9aa7b3] leading-7">{`// ${props.companyName} experience`}</div>
            <div className="leading-7">
              <span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">company</span> <span className="text-[#E99287]">=</span> <span className="text-[#E99287]">&quot;{props.companyName}&quot;</span>
            </div>
            <div className="leading-7">
              <span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">role</span> <span className="text-[#E99287]">=</span> <span className="text-[#E99287]">&quot;{props.role}&quot;</span>
            </div>
            <div className="leading-7">
              <span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">tenure</span> <span className="text-[#E99287]">=</span> <span className="text-[#E99287]">&quot;{props.tenure}&quot;</span>
            </div>
            <div className="text-[#9aa7b3] leading-7 mt-2">{`// description`}</div>
            <div className="leading-7 text-[#cbd5e1] whitespace-pre-line">{props.desc}</div>
          </div>
        </div>
    </IdePanel>
  );
};
export default ExpCard;
