import SyntaxHighlighter from "react-syntax-highlighter";
import { codeStyle } from "../utils/utils";
import SidePanel from "../components/SidePanel";
import HamburgerItem from "../components/HamburgerItem";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

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
    <div className="flex animate-fadeInIDE md:flex-row flex-col">
      {!isMenuOpen && (
        <>
          <SidePanel width={20}>
            <div className="animate-slideInFromLeft">
              <HamburgerItem title={"about"} isOpen={false}>
                <div className="text-sm text-gray-400">Personal info</div>
              </HamburgerItem>
            </div>
          </SidePanel>

          <div className="animate-slideInFromRight">
            <SyntaxHighlighter
              language="javascript"
              style={codeStyle}
              showLineNumbers={true}
            >
              {jsxString}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
