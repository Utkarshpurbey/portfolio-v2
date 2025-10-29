/* eslint-disable no-use-before-define */
import Game from "../components/Game";
import bg from "@/public/assets/bg.png";
import gameBg from "@/public/assets/GameBg.png";
import boltSvg from "@/public/assets/Bolt.svg";
import pointsSvg from "@/public/assets/Points.svg";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";

const Intro: React.FC<{ isMobile: boolean }> = React.memo(({ isMobile }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="flex flex-col justify-between flex-1 md:pl-[15%] pl-[10%] md:pt-[20%] pt-[30%] md:pb-[10%] pb-[50%]"
        style={{
          backgroundImage: isMobile ? `url(${bg.src})` : "none",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-left text-[#e5e9f0]">
          <div className="font-light text-xl">Hi all. I am</div>
          <div className="text-7xl font-light py-2">
            <div>Utkarsh</div>
            <div>Purbey</div>
          </div>
          <div className="font-normal text-xl text-[#43D9AD]">
            {`>  Front-end developer`}
          </div>
        </div>
      </div>

      <div className="text-left md:pl-[15%] pl-[10%]">
        <div className="text-[#9aa7b3] font-mono">
          {"// find my profile on Github:"}
        </div>
        <div className="font-mono text-medium mt-3 py-2">
          <div
            onClick={() =>
              window.open("https://github.com/Utkarshpurbey", "_blank")
            }
          >
            <span className="text-[#4D5BCE]">const</span>{" "}
            <span className="text-[#43D9AD]">githubLink</span>{" "}
            <span className="text-[#E99287]">=</span>{" "}
            <span className="text-[#E99287]">
              &quot;https://github.com/Utkarshpurbey&quot;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

Intro.displayName = "Intro";

const RightPanel: React.FC = React.memo(() => {
  const gameScore = useSelector(
    (state: IRootState) => state.vitalInfo.gameScore
  );
  const TOTAL_POINTS = 10;

  return (
    <div className="flex-1 flex flex-col justify-center text-white font-mono">
      <div className="text-lg font-semibold mb-4">How to Play:</div>
      <ul className="space-y-1 text-sm">
        {/* 
        <li>• Press 'A' to start the game</li>
        <li>• Watch the sequence of colors</li>
        <li>• Click the colors in the same order</li>
        <li>• Each round adds one more color</li>
        <li>• Try to get the highest score!</li> 
        */}
      </ul>
      <div>
        <div>{"// points left to score"}</div>
        <div className="mt-2 flex flex-wrap gap-1 items-center">
          {Array.from({
            length: Math.max(0, TOTAL_POINTS - (gameScore || 0)),
          }).map((_, idx) => (
            <Image
              key={`point-left-${idx}`}
              src={pointsSvg}
              alt="point left"
              className="w-4 h-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
});

RightPanel.displayName = "RightPanel";

const HomePageContent: React.FC<{ isMobile: boolean }> = React.memo(
  ({ isMobile }) => {
    return (
      <div className="flex w-full h-full">
        <div className="flex-1 w-full">
          <Intro isMobile={isMobile} />
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:w-[40%] md:pt-[5%]">
          <div
            className="relative w-[90%] max-w-[600px] h-[90%] max-h-[600px] min-h-[400px] mx-auto mt-[10%] rounded-md p-10"
            style={{
              backgroundImage: `url(${gameBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src={boltSvg}
              alt="bolt top left"
              className="absolute top-1 left-1 w-5 h-5"
            />
            <Image
              src={boltSvg}
              alt="bolt top right"
              className="absolute top-1 right-1 w-5 h-5"
            />
            <Image
              src={boltSvg}
              alt="bolt bottom left"
              className="absolute bottom-1 left-1 w-5 h-5"
            />
            <Image
              src={boltSvg}
              alt="bolt bottom right"
              className="absolute bottom-1 right-1 w-5 h-5"
            />

            <div className="flex gap-4 w-full h-[380px]">
              <div className="w-[214px] h-full">
                <Game />
              </div>
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

HomePageContent.displayName = "HomePageContent";

const HomePage: React.FC = () => {
  const { isMenuOpen, isMobile } = useSelector(
    (state: IRootState) => state.vitalInfo
  );

  return (
    <div className="flex flex-col w-full h-full animate-fadeInIDE">
      {!isMenuOpen && <HomePageContent isMobile={isMobile} />}
    </div>
  );
};

export default HomePage;
