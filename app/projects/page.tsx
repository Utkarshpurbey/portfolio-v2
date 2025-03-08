const Projects = () => {
  const techStack = ["React", "Node", "JS", "TS", "Java","C++"];
  return (
    <div className="flex w-full h-full">
      <div className="w-[20%] h-[90%]  border-r border-borderColor">
        <div className="px-4">
          {techStack?.map((i, index) => (
            <div key={index}>
              <label>
                <input type="checkbox" />
                {i}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};
export default Projects;
