import SyntaxHighlighter from "react-syntax-highlighter";
import { codeStyle } from "../utils/utils";
import SidePanel from "../components/SidePanel";
import HamburgerItem from "../components/HamburgerItem";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";
import { newExpList } from "../utils/constant";
import ExpCard from "../components/ExpCard";

//
const About = () => {
  const { isMenuOpen } = useSelector((state: IRootState) => state.vitalInfo);
  const jsxString = ` // <div>
    //   <h1>Hello this Utkarsh</h1>
    //   {["a", "b", "c"].map((item, index) => (
    //     <div key={index}>{item}</div>
    //   ))}
    // </div>`;

  return (
    <div className="flex w-full h-[calc(100vh-200px)] md:h-[calc(100vh-100px)] animate-fadeInIDE md:flex-row flex-col">
      {!isMenuOpen && (
        <>
          <SidePanel width={25}>
            <div className="animate-slideInFromLeft">
              <HamburgerItem title={"about"} isOpen={false}>
                <div className="text-sm text-gray-400">Personal info</div>
              </HamburgerItem>
            </div>
          </SidePanel>

          <div className="animate-slideInFromRight w-full md:overflow-y-auto overflow-y-auto overflow-x-hidden h-full md:max-h-none max-h-[calc(100vh-200px)] flex flex-col pb-8">
            <div className="w-full max-w-[960px] mx-auto box-border px-5 md:px-8 lg:px-10 py-5 md:py-6 lg:py-8 md:pt-8 relative">
              {newExpList.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={idx} className="relative mb-8 md:mb-12 last:mb-0 animate-fadeInIDE" style={{ animationDelay: `${idx * 0.1}s` }}>
                    {idx < newExpList.length - 1 && (
                      <div className={`absolute ${isEven ? 'left-[50%]' : 'right-[50%]'} top-full w-[300px] md:w-[400px] h-24 md:h-32 ${isEven ? '-translate-x-[50%]' : 'translate-x-[50%]'} hidden md:block overflow-visible pointer-events-none z-0`}>
                        <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                          <defs>
                            <marker id={`arrowhead-${idx}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                              <polygon points="0 0, 12 6, 0 12" fill="#43D9AD" opacity="0.9" />
                            </marker>
                            <linearGradient id={`arrow-gradient-${idx}`} x1={isEven ? "0%" : "100%"} y1="0%" x2={isEven ? "100%" : "0%"} y2="100%">
                              <stop offset="0%" stopColor="#43D9AD" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#4D5BCE" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="#43D9AD" stopOpacity="0.6" />
                            </linearGradient>
                          </defs>
                          {isEven ? (
                            <path
                              d="M 200 0 Q 300 30, 250 60 Q 200 90, 200 120"
                              stroke={`url(#arrow-gradient-${idx})`}
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray="8, 6"
                              markerEnd={`url(#arrowhead-${idx})`}
                              className="animate-dash animate-journey-glow"
                              style={{ 
                                animationDelay: `${idx * 0.2 + 0.4}s`
                              }}
                            />
                          ) : (
                            <path
                              d="M 200 0 Q 100 30, 150 60 Q 200 90, 200 120"
                              stroke={`url(#arrow-gradient-${idx})`}
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray="8, 6"
                              markerEnd={`url(#arrowhead-${idx})`}
                              className="animate-dash animate-journey-glow"
                              style={{ 
                                animationDelay: `${idx * 0.2 + 0.4}s`
                              }}
                            />
                          )}
                        </svg>
                      </div>
                    )}
                    <div className="relative z-10">
                      <ExpCard {...item} isFirst={idx === 0} isLast={idx === newExpList.length - 1} index={idx} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
