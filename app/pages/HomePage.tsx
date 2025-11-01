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
        className="flex flex-col justify-center flex-1 md:pl-[12%] pl-[8%] md:pt-0 pt-[25%] md:pb-0 pb-[30%]"
        style={{
          backgroundImage: isMobile ? `url(${bg.src})` : "none",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-left text-[#e5e9f0]">
          <div className="font-light text-xl">Hi all. I am</div>
          <div className="text-7xl font-light py-2">
            {!isMobile && <div>Utkarsh Purbey</div>}
            <div className="md:hidden">
              <div>Utkarsh</div>
              <div>Purbey</div>
            </div>
          </div>
          <div className="font-normal text-xl text-[#43D9AD]">
            {`>  Front-end developer`}
          </div>
        </div>
      </div>

      <div className="text-left md:pl-[12%] pl-[8%] md:mt-4 mt-2">
        {!isMobile && (
          <div className="text-[#9aa7b3] font-mono pb-2">
            {"// complete the game to continue"}
          </div>
        )}
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
            <span className="hidden md:inline text-[#E99287]">
              &quot;https://github.com/Utkarshpurbey&quot;
            </span>
            <span className="md:hidden text-[#E99287]">
              &quot;https://
              <br />
              github.com/Utkarshpurbey&quot;
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
  const TOTAL_POINTS = 5;

  return (
    <div className="flex-1 flex flex-col justify-center text-white">
      <div className="text-lg font-semibold mb-4">How to Play:</div>
      <ul className="text-sm">
        <li>• Press &apos;A&apos; to start the game</li>
        <li>• Watch the sequence of colors</li>
        <li>• Click the colors in the same order</li>
        <li>• Each round adds one more color</li>
      </ul>
      <div>
        <div className="pt-2">{"// points left to score"}</div>
        <div className="mt-2 flex flex-wrap gap-2 items-center">
          {Array.from({
            length: Math.max(0, TOTAL_POINTS - (gameScore || 0)),
          }).map((_, idx) => (
            <Image
              key={`point-left-${idx}`}
              src={pointsSvg}
              alt="point left"
              className="w-6 h-6"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="pt-4">
        <button className="border border-white border-1 py-1 px-6 rounded-lg text-sm">
          Skip
        </button>
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
        <div
          className="hidden md:flex md:items-center md:justify-center md:w-[50%] md:pt-[5%] h-full"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "top",
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="relative w-[80%] max-w-[600px] h-[90%] max-h-[450px] min-h-[400px] mx-auto mt-[10%] rounded-md p-10"
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
              priority
              loading="eager"
            />
            <Image
              src={boltSvg}
              alt="bolt top right"
              className="absolute top-1 right-1 w-5 h-5"
              priority
              loading="eager"
            />
            <Image
              src={boltSvg}
              alt="bolt bottom left"
              className="absolute bottom-1 left-1 w-5 h-5"
              priority
              loading="eager"
            />
            <Image
              src={boltSvg}
              alt="bolt bottom right"
              className="absolute bottom-1 right-1 w-5 h-5"
              priority
              loading="eager"
            />

            <div
              className="flex gap-4 w-full h-[380px]"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
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
