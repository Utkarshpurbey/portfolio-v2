"use client";
import React, { useState } from "react";
import HamburgerItem from "../components/HamburgerItem";
import cross from "../../public/assets/cross.svg";
import Image from "next/image";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  const techStack = ["React", "Node", "JS", "TS", "Java", "C++"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur.",
      imageUrl: "https://picsum.photos/200/300",
      tags: "//_ui-animation",
      buttonText: "view-project",
    },
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur.",
      imageUrl: "https://picsum.photos/200/300",
      tags: "//_ui-animation",
      buttonText: "view-project",
    },
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur.",
      imageUrl: "https://picsum.photos/200/300",
      tags: "//_ui-animation",
      buttonText: "view-project",
    },
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae est minus ut id praesentium consectetur.",
      imageUrl: "https://picsum.photos/200/300",
      tags: "//_ui-animation",
      buttonText: "view-project",
    },
    {
      title: "Project 2",
      description: "Another project description goes here.",
      imageUrl: "https://picsum.photos/200/301",
      tags: "//_web-development",
      buttonText: "view-project",
    },
    {
      title: "Project 2",
      description: "Another project description goes here.",
      imageUrl: "https://picsum.photos/200/301",
      tags: "//_web-development",
      buttonText: "view-project",
    },
    {
      title: "Project 2",
      description: "Another project description goes here.",
      imageUrl: "https://picsum.photos/200/301",
      tags: "//_web-development",
      buttonText: "view-project",
    },
    {
      title: "Project 2",
      description: "Another project description goes here.",
      imageUrl: "https://picsum.photos/200/301",
      tags: "//_web-development",
      buttonText: "view-project",
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex w-full h-[calc(100vh-100px)]">
      <div className="w-[25%]  h-[calc(100vh-100px)] border-r border-borderColor">
        <div className="">
          <HamburgerItem title={"Personal Projects"} isOpen={true}>
            {techStack?.map((i, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 cursor-pointer"
                  style={{ accentColor: "#1e2d3d" }}
                  onChange={() => handleCheckboxChange(i)}
                  checked={selectedOptions.includes(i)}
                />
                <label className="text-current">{i}</label>
              </div>
            ))}
          </HamburgerItem>
        </div>
      </div>
      <div className="w-full overflow-y-auto">
        {selectedOptions?.length > 0 && (
          <div className="border-b border-borderColor w-full text-sm">
            <div className="flex items-center border-r-2 border-borderColor w-fit">
              {selectedOptions?.map((item, index) => {
                return (
                  <div key={index} className="px-1 py-1">
                    {selectedOptions?.length - 1 !== index ? `${item}; ` : item}
                  </div>
                );
              })}
              <div className="px-3" onClick={() => setSelectedOptions([])}>
                <Image src={cross.src} height={8} width={8} alt={"hello"} />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap pb-10">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              buttonText={project.buttonText}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
