"use client";
import React, { useState } from "react";
import HamburgerItem from "../components/HamburgerItem";
import cross from '../../public/assets/cross.svg'
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
      <div className="w-[20%] h-[90%] border-r border-borderColor">
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
          <div className="border-b border-borderColor w-full  text-sm">
            <div className="flex items-center border-r-2  border-borderColor w-fit">
              {selectedOptions?.map((item, index) => {
                return (
                  <div key={index} className="px-1 py-1">
                    {selectedOptions?.length - 1 !== index ? `${item}; ` : item}
                  </div>
                );
              })}
             <div className="px-3" onClick={()=>{setSelectedOptions([])}}>
              <Image src = {cross.src} height={8} width={8} alt= {'hello'} />
             </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
