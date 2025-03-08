import gitHub from "@/public/assets/gitHub.svg";
import twitter from "@/public/assets/twitter.svg";
import Image from "next/image";
import insta from "@/public/assets/insta.svg";
const MyFooter = () => {
  return (
    <div className="border-t border-[#1e2d3d]">
      <div className="flex justify-between items-center">
        <div className="px-2 flex w-[20%] items-center justify-between ">
          <div>Find me on:</div>
          <div className=" flex justify-between items-center">
            <div className="border-l border-borderColor p-2">
              <Image src={twitter.src} height={20} width={20} alt="GitHub" />
            </div>
            <div className="border-l border-r border-borderColor p-2 ">
              <Image src={insta.src} height={20} width={20} alt="insta" />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center border-l border-borderColor p-2">
            <div className="px-3">@Utkarshpurbey</div>
            <Image src={gitHub.src} height={20} width={20} alt="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
