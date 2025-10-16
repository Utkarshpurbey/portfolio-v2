import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const MyFooter = () => {
  return (
    <div className="border-t border-borderColor bg-[#011627] animate-fadeInIDE">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
        <div className="pl-2 flex w-[20%] items-center justify-between">
          <div className="flex items-center justify-center w-full">
            <div className="animate-slideInFromLeft">find me in:</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="border-l border-borderColor p-2 ide-hover cursor-pointer">
              <FaTwitter size={20} />
            </div>
            <div className="border-l border-r border-borderColor p-2 ide-hover cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center border-l border-borderColor p-2 ide-hover cursor-pointer">
            <div className="px-3 animate-slideInFromRight">@Utkarshpurbey</div>
            <FaGithub size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between  animate-smoothTransition">
        <div className="animate-slideInFromLeft text-sm pl-3">find me in:</div>
        <div className="flex items-center h-full">
          <div className="border-l border-borderColor py-3 px-3 ide-hover cursor-pointer h-full flex items-center">
            <FaTwitter size={16} />
          </div>
          <div className="border-l border-borderColor py-3 px-3 ide-hover cursor-pointer h-full flex items-center">
            <FaInstagram size={16} />
          </div>
          <div className="border-l border-borderColor py-3 px-3 ide-hover cursor-pointer h-full flex items-center">
            <FaGithub size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
