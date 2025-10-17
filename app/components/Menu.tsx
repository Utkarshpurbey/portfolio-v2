import { IRootState } from "../Slice/store";
import { setActiveTab, setIsMenuOpen } from "../Slice/vitalInfo";
import { Tabs } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const { activeTab } = useSelector((state: IRootState) => state.vitalInfo);
  const reduxDispatch = useDispatch();

  const handleTabClick = (tab: string) => {
    reduxDispatch(setActiveTab(tab));
    reduxDispatch(setIsMenuOpen(false));
  };

  return (
    <div className="bg-[#011627] w-full h-full flex flex-col items-center justify-center border-t border-b border-borderColor animate-fadeInIDE">
      {Tabs?.map((ele, index) => (
        <div
          key={index}
          onClick={() => handleTabClick(ele)}
          className={`px-6 py-4 cursor-pointer border-b border-borderColor w-full text-xl ide-hover
            ${activeTab === ele ? "text-white ide-active" : "vs-code-300"}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <span className="animate-slideInFromLeft">{ele}</span>
        </div>
      ))}
      <div
        className="text-left w-full px-6 py-4 cursor-pointer text-xl vs-code-300 
        ide-hover animate-slideInFromRight"
        onClick={() => handleTabClick("_contact-me")}
      >
        _contact-me
      </div>
    </div>
  );
};

export default Menu;
