import React from "react";
import { Highlight } from "prism-react-renderer";
import { CodeTheme, ThemeName, themes } from "../themes/codeThemes";

interface CodeHighlighterProps {
  code: string;
  language?: string;
  theme?: ThemeName;
  showLineNumbers?: boolean;
  customTheme?: CodeTheme;
  className?: string;
  style?: React.CSSProperties;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language = "javascript",
  theme = "default",
  showLineNumbers = true,
  customTheme,
  className = "",
  style = {},
}) => {
  const selectedTheme = customTheme || themes[theme];

  return (
    <Highlight
      code={code}
      language={language}
      theme={selectedTheme}
    >
      {({ className: highlightClassName, style: highlightStyle, tokens, getLineProps, getTokenProps }) => (
        <pre 
          className={`${highlightClassName} ${className}`} 
          style={{ 
            ...highlightStyle, 
            margin: 0, 
            background: "transparent",
            ...style 
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {showLineNumbers && (
                <span 
                  style={{ 
                    color: "#5c5c5c", 
                    marginRight: "1rem", 
                    userSelect: "none", 
                    minWidth: "2rem", 
                    display: "inline-block" 
                  }}
                >
                  {i + 1}
                </span>
              )}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;
