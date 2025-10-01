import Image from "next/image";
import React from "react";
import { ICON_MAP } from "../utils/iconMap";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  tags: String;
  techStack: string[];
  height?: number;
  githubUrl: string;
}

const ProjectTile: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  tags,
  techStack,
  height = 200,
  githubUrl,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="flex py-1 px-2">
        <div className="text-[#5565e8] font-semibold">{title}</div>
        <div className="flex space-x-2">
         <div className="pl-4">{tags}</div>
        </div>
      </div>
      <div
        className="border-borderColor border rounded-2xl bg-[#011221]"
        style={{ height: `${height}px` }}
      >
        <div>
          <div className="h-[15vh] w-full relative">
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              alt="Project Image"
              className="rounded-t-2xl"
            />
            <div className="absolute top-2 right-2 flex space-x-2">
              {techStack &&
                techStack.map((tech, index) => {
                  const IconData = ICON_MAP[tech];
                  if (!IconData || index ==1) return null;
                  const { Icon, color } = IconData;
                  return (
                    <div
                      key={index}
                      className="w-8 h-8 flex items-center justify-center rounded-sm p-1"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={20} color="black" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="mt-2 p-2 flex flex-col"
            style={{ height: `calc(${height}px - 15vh - 16px)` }}
          >
            <div className="overflow-y-auto flex-grow">{description}</div>
            <div className="my-2">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="py-1 px-3 bg-[#1c2b3a] rounded-lg hover:bg-[#2c4d6b]">
                  view project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
