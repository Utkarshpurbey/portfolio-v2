import Game from "../components/Game";
import bg from "@/public/assets/bg.png";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

const HomePage = () => {
  const { isMenuOpen, isMobile } = useSelector((state: IRootState) => state.vitalInfo);
  return (
    <div className="flex flex-col w-full h-full animate-fadeInIDE">
      {!isMenuOpen && (
        <div className="flex flex-1 flex-row">
          <div className={`${isMobile ? 'w-full' : 'flex-1'} p-4 animate-slideInFromLeft`}>
            <div className="animate-fadeInIDE">Today agenda</div>
            <ul className="pl-4">
              <li className="animate-slideInFromLeft ide-hover cursor-pointer" style={{ animationDelay: '0.05s' }}>Making header and footer better</li>
              <li className="animate-slideInFromLeft ide-hover cursor-pointer" style={{ animationDelay: '0.1s' }}>Working on color and font</li>
              <li className="animate-slideInFromLeft ide-hover cursor-pointer" style={{ animationDelay: '0.15s' }}>Project page mein card ko structure krna and </li>
              <li className="animate-slideInFromLeft ide-hover cursor-pointer" style={{ animationDelay: '0.2s' }}>Side Panel ko common banana</li>
            </ul>
          </div>

          {!isMobile && (
            <div className="flex-1 min-w-[50%] animate-slideInFromRight" id="game-container">
              <div
                className="h-[60vh] flex-col w-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${bg.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="h-[45vh] w-[85%] bg-gradient-to-br from-[#1b665e] to-[#1c3a5f] rounded-md overflow-auto animate-smoothTransition">
                  <div className="flex h-full w-[50%] justify-center items-center">
                    <div className="h-[90%] w-full pl-[15%]">
                      <Game />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
