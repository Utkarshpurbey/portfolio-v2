import React, { useMemo, useState } from "react";
import HamburgerItem from "../components/HamburgerItem";
import { FaTimes } from "react-icons/fa";
import CustomCheckbox from "../components/CustomCheckbox";
import ProjectTile from "../projects/ProjectTile";
import { projects, techStackArray } from "../projects/projects.js";
import { ICON_MAP } from "../utils/iconMap";
import SidePanel from "../components/SidePanel";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  techStack: string[];
  githubUrl: string;
};

const Projects = () => {
  const { isMenuOpen } = useSelector((state: IRootState) => state.vitalInfo);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const projectsToDisplay = useMemo(() => {
    if (selectedOptions.length === 0) {
      return projects;
    }
    const filteredProjects = selectedOptions.flatMap((item) =>
      projects.filter((i) => i?.techStack?.includes(item)),
    );
    return Array.from(new Set(filteredProjects));
  }, [selectedOptions]);

  const Options = () => {
    return (
      <div className="">
        {" "}
        {techStackArray?.map((i, index) => {
          const Icon = ICON_MAP[i]?.Icon;
          return (
            <div key={index} className="flex items-center my-3 mr-2">
              <CustomCheckbox
                checked={selectedOptions.includes(i)}
                onChange={() => handleCheckboxChange(i)}
              />
              {Icon && (
                <Icon
                  size={20}
                  className="mx-3"
                  color={selectedOptions.includes(i) ? "#607b96" : "#273e53"}
                />
              )}
              <label
                className={`${
                  selectedOptions.includes(i) ? "text-white" : "text-current"
                }`}
              >
                {i}
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex w-full h-[calc(100vh-200px)] md:h-[calc(100vh-100px)] animate-fadeInIDE md:flex-row flex-col">
      {!isMenuOpen && (
        <>
          <SidePanel>
            <div className="animate-slideInFromLeft">
              <HamburgerItem title={"projects"} isOpen={false}>
                <Options />
              </HamburgerItem>
            </div>
          </SidePanel>
          <div className="w-full md:overflow-y-auto overflow-y-auto animate-slideInFromRight overflow-x-hidden h-full md:max-h-none max-h-[calc(100vh-200px)] flex flex-col">
            {selectedOptions?.length > 0 && (
              <div className="w-full text-sm animate-slideInFromTop">
                <div className="flex items-center border-r border-borderColor w-fit">
                  {selectedOptions?.map((item, index) => {
                    return (
                      <div key={index} className="px-2 py-2 font-400">
                        {selectedOptions?.length - 1 !== index
                          ? `${item}; `
                          : item}
                      </div>
                    );
                  })}
                  <div
                    className="pr-2 cursor-pointer ide-hover"
                    onClick={() => setSelectedOptions([])}
                  >
                    <FaTimes size={14} />
                  </div>
                </div>
              </div>
            )}
            <div
              className={`${selectedOptions?.length > 0 ? "" : "md:pt-8"} flex flex-wrap px-2 md:px-0 max-w-full md:overflow-visible overflow-y-auto min-h-0 flex-grow`}
            >
              {projectsToDisplay.map((project, index) => (
                <ProjectTile
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  height={320}
                  customClass={index === projectsToDisplay.length - 1 ? "md:pb-16" : ""}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
