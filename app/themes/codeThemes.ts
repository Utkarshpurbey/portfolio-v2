export interface CodeTheme {
  plain: {
    color: string;
    backgroundColor: string;
    fontSize: string;
    fontFamily: string;
    lineHeight: string;
    fontWeight:
      | "normal"
      | "bold"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  };
  styles: Array<{
    types: string[];
    style: {
      color: string;
      fontWeight?:
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
      fontStyle?: "normal" | "italic";
    };
  }>;
}

export const defaultTheme: CodeTheme = {
  plain: {
    color: "#5564e8",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontFamily:
      "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'SF Mono', Monaco, Consolas, 'Courier New', monospace",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#5c5c5c",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#607b96",
      },
    },
    {
      types: [
        "property",
        "tag",
        "boolean",
        "number",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: "#607b96",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#ffa55f",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#ff6b9d",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#c792ea",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name"],
      style: {
        color: "#5564e8",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#5564e8",
      },
    },
  ],
};

export const darkTheme: CodeTheme = {
  plain: {
    color: "#e6e6e6",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontFamily:
      "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'SF Mono', Monaco, Consolas, 'Courier New', monospace",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#6a9955",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#d4d4d4",
      },
    },
    {
      types: [
        "property",
        "tag",
        "boolean",
        "number",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: "#b5cea8",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#ce9178",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#d4d4d4",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#569cd6",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name"],
      style: {
        color: "#dcdcaa",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#9cdcfe",
      },
    },
  ],
};

export const minimalTheme: CodeTheme = {
  plain: {
    color: "#333333",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontFamily:
      "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'SF Mono', Monaco, Consolas, 'Courier New', monospace",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#888888",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#333333",
      },
    },
    {
      types: [
        "property",
        "tag",
        "boolean",
        "number",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: "#0066cc",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#cc6600",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#666666",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#9900cc",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name"],
      style: {
        color: "#0066cc",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#333333",
      },
    },
  ],
};

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
  minimal: minimalTheme,
} as const;

export type ThemeName = keyof typeof themes;
