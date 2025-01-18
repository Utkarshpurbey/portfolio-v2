"use client";
import Game from "./components/Game";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-1 flex-row">
        <div className="flex-1 ">
          Left content
        </div>

        <div className="flex-1 min-w-[50%]" id="game-container"> {/* Main game content */}
          {/* Ensure it fills the remaining space */}
          <div className="h-[80vh] flex-col w-full flex items-center justify-center ">

            <div className="h-[60vh] w-[85%] bg-gradient-to-br from-[#1b665e] to-[#1c3a5f]">
              <Game />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
