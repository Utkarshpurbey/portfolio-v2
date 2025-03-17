import Image from "next/image";

const ProjectTile = ({
  title,
  description,
  imageUrl,
  tags,
  buttonText,
  height = 400,
}) => {
  return (
    <div className="px-4 w-[33%]">
      <div className="flex py-1 px-2">
        <div className="text-[#5565e8] font-semibold">{title}</div>
        <div className="pl-[10%]">{tags}</div>
      </div>
      <div
        className="border-borderColor border rounded-2xl"
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
          </div>
          <div
            className="mt-2 p-2 flex flex-col"
            style={{ height: `calc(${height}px - 15vh - 16px)` }}
          >
            <div className="overflow-y-auto flex-grow">{description}</div>
            <div className="my-2">
              <button className="py-1 px-3 bg-[#1b2b3a] rounded-lg">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
