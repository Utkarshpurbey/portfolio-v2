"use client";
import React, { useState } from "react";
import HamburgerItem from "../components/HamburgerItem";
import cross from "../../public/assets/cross.svg";
import Image from "next/image";

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

  return (
    <div className="flex w-full h-full">
      <div className="w-[25%] h-[90%] border-r border-borderColor">
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
      <div className="w-full">
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
        <div className="px-4 w-[33%] max-h-[50%]">
          <div className="flex py-1 px-2">
            <div className="text-[#5565e8] font-semibold">Project 1</div>
            <div className="pl-[10%]"> {`//_ui-animation`}</div>
          </div>
          <div className="border-borderColor border rounded-2xl">
            <div className="">
              <div className="h-[15vh] w-full relative">
                <Image
                  src="https://picsum.photos/200/300"
                  layout="fill"
                  objectFit="cover"
                  alt="Project Image"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="mt-2 p-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora molestiae est minus ut id praesentium consectetur
                </div>
                <div className="my-2">
                  <button className="py-1 px-3 bg-[#1b2b3a] rounded-lg">
                    view-project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
