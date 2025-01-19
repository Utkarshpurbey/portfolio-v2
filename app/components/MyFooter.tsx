import gitHub from "@/public/assets/gitHub.svg";
import twitter from "@/public/assets/twitter.svg";
import Image from "next/image";
import insta from "@/public/assets/insta.svg";
const MyFooter = () => {
  return (
    <div className="border-t border-[#1e2d3d] py-1 px-4 flex items-center ">
      <div className="flex w-1/5 border-r border-borderColor justify-between items-center">
        <div>find me on :</div>
        <div className="flex">
          <div className="px-2 border-l  border-borderColor">
            <Image src={twitter.src} height={20} width={20} alt="GitHub" />
          </div>
          <div className="border-l-2 border-borderColor px-2">
            <Image src={insta.src} height={20} width={20} alt="insta" />
          </div>
        </div>
      </div>
      <div className="flex w-4/5 relative">
        <div className="aling-center w-full">Copyright © 2022 utkarsh-purbey</div>
        <div className="flex absolute right-0">
          <div >@Utkarshpurbey</div>
          <Image src={gitHub.src} height={20} width={20} alt="GitHub" />
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
