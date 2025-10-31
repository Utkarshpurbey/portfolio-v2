import Image from "next/image";

const ExpCard = (props) => {
  return (
    <div className="group relative w-full">
      {/* IDE-like wrapper */}
      <div className="relative w-full rounded-lg border border-[#1e2d3d] bg-[#0b1e2b]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#43D9AD]/60 hover:shadow-[0_12px_48px_rgba(67,217,173,0.08)]">
        {/* window controls header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#132b3a] bg-[#0d2230]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#9aa7b3] text-xs font-mono">{props.companyName?.toLowerCase?.() || "company"}.exp.ts</div>
          <div className="pr-2">
            <div className="h-6 w-6 rounded-md border border-[#1e2d3d] flex items-center justify-center bg-[#011628]">
              <Image src={props.logo} alt="logo" height={16} width={16} className="rounded-sm" />
            </div>
          </div>
        </div>

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

        {/* subtle hover glow */}
        <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: "radial-gradient(1000px 200px at 10% -40%, rgba(77,91,206,0.08), transparent 60%), radial-gradient(800px 200px at 120% 120%, rgba(67,217,173,0.08), transparent 60%)"}} />
      </div>
    </div>
  );
};
export default ExpCard;
