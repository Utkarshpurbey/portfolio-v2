import SyntaxHighlighter from "react-syntax-highlighter";
import { codeStyle } from "../utils/utils";
import SidePanel from "../components/SidePanel";
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
    <div className="flex">
      {!isMenuOpen && (
        <>
          <SidePanel width={20}>
            <h1>Hello</h1>
          </SidePanel>

          <SyntaxHighlighter
            language="javascript"
            style={codeStyle}
            showLineNumbers={true}
          >
            {jsxString}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
};

export default About;
