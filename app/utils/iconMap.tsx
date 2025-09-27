// utils/iconMap.tsx
import {
  SiTypescript,
  SiCplusplus,
  SiNodedotjs,
  SiJavascript,
  SiChartdotjs,
  SiPhp,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import React from "react";

export const ICON_MAP: Record<
  string,
  {
    Icon: React.ComponentType<{
      size?: number;
      color?: string;
      className?: string;
    }>;
    color: string;
  }
> = {
  React: { Icon: IoLogoReact, color: "#61DBFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  "Node.js": { Icon: SiNodedotjs, color: "#83CD29" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Charts: { Icon: SiChartdotjs, color: "#4e73df" },
  PHP: { Icon: SiPhp, color: "#787CB5" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
};
