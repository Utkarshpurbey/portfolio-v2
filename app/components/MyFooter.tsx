import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const MyFooter = () => {
  return (
    <div className="border-t border-borderColor bg-[#011627]">
      <div className="flex justify-between items-center">
        <div className="pl-2 flex w-[20%] items-center justify-between ">
          <div>Find me on:</div>
          <div className=" flex justify-between items-center">
            <div className="border-l border-borderColor p-2">
              <FaTwitter size={20} />
            </div>
            <div className="border-l border-r border-borderColor p-2 ">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center border-l border-borderColor p-2">
            <div className="px-3">@Utkarshpurbey</div>
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
