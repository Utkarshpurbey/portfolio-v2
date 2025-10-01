"use client";
import React, { useMemo, useState } from "react";
import HamburgerItem from "../components/HamburgerItem";
import { FaTimes } from "react-icons/fa";
import CustomCheckbox from "../components/CustomCheckbox";
import ProjectTile from "../projects/ProjectTile";
import { projects, techStackArray } from "../projects/projects.js";
import { ICON_MAP } from "../utils/iconMap";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  techStack: string[];
  githubUrl:string;
};

const Projects = () => {
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

  return (
    <div className="flex w-full h-[calc(100vh-100px)]">
      <div className="w-[25%]  h-[calc(100vh-100px)] border-r border-borderColor">
        <div className="">
          <HamburgerItem title={"projects"} isOpen={true}>
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
                        color={
                          selectedOptions.includes(i) ? "#607b96" : "#273e53"
                        }
                      />
                    )}
                    <label
                      className={`${
                        selectedOptions.includes(i)
                          ? "text-white"
                          : "text-current"
                      }`}
                    >
                      {i}
                    </label>
                  </div>
                );
              })}
            </div>
          </HamburgerItem>
        </div>
      </div>
      <div className="w-full overflow-y-auto">
        {selectedOptions?.length > 0 && (
          <div className="border-b border-borderColor w-full text-sm">
            <div className="flex items-center border-r border-borderColor w-fit">
              {selectedOptions?.map((item, index) => {
                return (
                  <div key={index} className="px-2 py-2 font-400">
                    {selectedOptions?.length - 1 !== index ? `${item}; ` : item}
                  </div>
                );
              })}
              <div className="pr-2" onClick={() => setSelectedOptions([])}>
                <FaTimes size={14} />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap pb-10">
          {projectsToDisplay.map((project, index) => (
            <ProjectTile
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              height={350}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
