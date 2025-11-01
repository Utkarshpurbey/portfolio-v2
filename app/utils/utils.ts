import About from "../pages/About";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
export { Tabs } from "./tabs";

export const componentAsPerTab: any = {
  _hello: HomePage,
  "_about-me": About,
  _projects: Projects,
  "_contact-me": Contact,
};

export const codeStyle = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    background: "#1a1a1a", // Dark blue-grey background
    color: "#5564e8", // Default text color for most elements
  },
  "hljs-subst": { color: "#607b96" },
  "hljs-comment": { color: "#5c5c5c" },
  "hljs-keyword": { color: "#c792ea", fontWeight: "bold" },
  "hljs-attribute": { color: "#c792ea", fontWeight: "bold" },
  "hljs-selector-tag": { color: "#c792ea", fontWeight: "bold" },
  "hljs-meta-keyword": { color: "#c792ea", fontWeight: "bold" },
  "hljs-doctag": { color: "#c792ea", fontWeight: "bold" },
  "hljs-name": { color: "#c792ea", fontWeight: "bold" },
  "hljs-type": { color: "#5564e8" },
  "hljs-string": { color: "#ffa55f" },
  "hljs-number": { color: "#607b96 !important" },
  "hljs-selector-id": { color: "#5564e8" },
  "hljs-selector-class": { color: "#5564e8" },
  "hljs-quote": { color: "#5564e8" },
  "hljs-template-tag": { color: "#5564e8" },
  "hljs-deletion": { color: "#5564e8" },
  "hljs-title": { color: "#5564e8", fontWeight: "bold" },
  "hljs-section": { color: "#5564e8", fontWeight: "bold" },
  "hljs-regexp": { color: "#5564e8" },
  "hljs-symbol": { color: "#5564e8" },
  "hljs-variable": { color: "#5564e8" },
  "hljs-params": { color: "#5564e8" },
  "hljs-template-variable": { color: "#5564e8" },
  "hljs-attr": { color: "#5564e8" },
  "hljs-property": { color: "#5564e8" },
  "hljs-variable.language_": { color: "#5564e8" },
  "hljs-variable.constant_": { color: "#5564e8" },
  "hljs-variable.other_": { color: "#5564e8" },
  "hljs-variable.parameter_": { color: "#5564e8" },
  "hljs-variable.function_": { color: "#5564e8" },
  "hljs-link": { color: "#5564e8" },
  "hljs-selector-attr": { color: "#5564e8" },
  "hljs-selector-pseudo": { color: "#5564e8" },
  "hljs-literal": { color: "#5564e8" },
  "hljs-title.function_": { color: "#5564e8" },
  "hljs-title.class_": { color: "#5564e8" },
  "hljs-built_in": { color: "#c792ea" },
  "hljs-bullet": { color: "#c792ea" },
  "hljs-code": { color: "#c792ea" },
  "hljs-addition": { color: "#c792ea" },
  "hljs-meta": { color: "#5564e8" },
  "hljs-meta-string": { color: "#5564e8" },
  "hljs-emphasis": { fontStyle: "italic" },
  "hljs-strong": { fontWeight: "bold" },
};

export const isProd = (): boolean => {
  const env = (
    process.env.NEXT_PUBLIC_APP_ENV ||
    process.env.VERCEL_ENV ||
    process.env.NODE_ENV ||
    ""
  ).toLowerCase();
  return env === "production" || env === "prod";
};

export const getAssetPath = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || (isProd() ? "/portfolio-v2" : "");
  if (!path) return base;
  // Ensure single slash when concatenating
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

export { preloadImage, preloadImages, preloadImageViaLink } from "./imageCache";
