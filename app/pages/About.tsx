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
            <div className="w-full max-w-[960px] mx-auto box-border px-5 md:px-8 lg:px-10 py-5 md:py-6 lg:py-8 space-y-5 md:pt-8">
              {newExpList.map((item, idx) => (
                <div key={idx}>
                  <ExpCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
