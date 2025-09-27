import SyntaxHighlighter from "react-syntax-highlighter";
import { codeStyle } from "../utils/utils";

//
const About = () => {
  const jsxString = ` // <div>
    //   <h1>Hello this Utkarsh</h1>
    //   {["a", "b", "c"].map((item, index) => (
    //     <div key={index}>{item}</div>
    //   ))}
    // </div>`;

  return (
    <div>
      <h1>Hello</h1>

      <SyntaxHighlighter
        language="javascript"
        style={codeStyle}
        showLineNumbers={true}
      >
        {jsxString}
      </SyntaxHighlighter>
    </div>
  );
};

export default About;
