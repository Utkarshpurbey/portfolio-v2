import IdePanel from "./IdePanel";

const ExpCard = ({
  companyName = "company",
  isInternship,
  logo,
  role,
  tenure,
  desc,
}) => {
  const name = companyName?.toLowerCase?.() ?? "company";
  const title = `${name}.${isInternship ? "internship" : "exp"}.ts`;
  const lineNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

  const details = [
    { key: "company", value: companyName },
    { key: "role", value: role },
    { key: "tenure", value: tenure },
  ];

  return (
    <IdePanel
      title={title}
      logo={logo}
      contentClassName="relative grid grid-cols-[auto_1fr] font-mono text-sm"
    >
      <div className="relative grid grid-cols-[auto_1fr] font-mono text-sm">
        <div className="select-none text-right text-[#3e5566] bg-[#091a25] px-3 py-4 border-r border-[#132b3a]">
          {lineNumbers.map((n) => (
            <div key={`ln-${n}`} className="leading-7">
              {n}
            </div>
          ))}
        </div>

        <div className="px-4 py-4 text-[#e5e9f0]">
          <div className="text-[#9aa7b3] leading-7">{`// ${companyName} ${
            isInternship ? "Internship experience" : "experience"
          }`}</div>

          {details.map(({ key, value }) => (
            <div key={key} className="leading-7">
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD]">{key}</span>{" "}
              <span className="text-[#E99287]">=</span>{" "}
              <span className="text-[#E99287]">"{value}"</span>
            </div>
          ))}

          <div className="text-[#9aa7b3] leading-7 mt-2">{`// description`}</div>
          <div className="leading-7 text-[#cbd5e1] whitespace-pre-line">{desc}</div>
        </div>
      </div>
    </IdePanel>
  );
};

export default ExpCard;
