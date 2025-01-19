import React, { useEffect, useState } from "react";
import simonPng from "@/public/assets/simon.png";
import Image from "next/image";
const Game = () => {
  const colors = ["red", "green", "blue", "yellow"];
  const boxColor = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
  ];
  const blinkClass = "opacity-20";
  const [gameSequence, updateGameSequence] = React.useState<any>([]);
  const [userSequence, updateUserSequence] = React.useState<string[]>([]);
  const [hasGameStarted, updateGameStatus] = React.useState<boolean>(false);
  const [noOfPress, updateNoOfPress] = React.useState<number>(0);
  const [hasUserMadeMistake, updateUserMistakeStatus] =
    React.useState<boolean>(false);
  const [score, updateScore] = useState(0);

  const generateSequnce = () => {
    const newGeneratedColor = colors[Math.floor(Math.random() * colors.length)];
    // showHint();
    setTimeout(() => animatePress(newGeneratedColor), 300);
    updateGameSequence([...gameSequence, newGeneratedColor]);
  };

  const updateUserInput = (color) => {
    updateNoOfPress(noOfPress + 1);
    const newUserInput = [...userSequence, color];
    updateUserSequence(newUserInput);
    captureUserInputandProceed(newUserInput.length, newUserInput);
  };

  const captureUserInputandProceed = (length, newUserInput) => {
    if (newUserInput[length - 1] === gameSequence[length - 1]) {
      if (newUserInput.length === gameSequence.length) {
        updateScore(score + 1);
        setTimeout(() => {
          if (!hasUserMadeMistake) generateSequnce();
        }, 1000);
        updateUserSequence([]);
      }
    } else {
      updateUserMistakeStatus(true);
    }
  };

  const resetGame = () => window?.location.reload();

  useEffect(() => {
    if (hasUserMadeMistake) playAudio("wrong");
  }, [hasUserMadeMistake]);

  const playAudio = (color) => {
    const sound = new Audio(`../sounds/${color}.mp3`);
    sound.play();
  };

  const animatePress = (selectedColor) => {
    const element = document.querySelector(`#id-${selectedColor}`);
    playAudio(selectedColor);
    if (element) {
      element.classList.add(blinkClass);
      setTimeout(() => element.classList.remove(blinkClass), 100);
    }
  };

  const startGame = () => {
    updateGameStatus(true);
    generateSequnce();
  };

  useEffect(() => {
    const updateGameStatusFunction = (e) => {
      if (e.key === "a" || e.key === "A") {
        startGame();
        window.removeEventListener("keydown", updateGameStatusFunction);
      }
    };
    window.addEventListener("keydown", updateGameStatusFunction);
    return () =>
      window.removeEventListener("keydown", updateGameStatusFunction);
  }, []);

  const showHint = () => {
    gameSequence.forEach((color, index) =>
      setTimeout(() => animatePress(color), index + 1 * 500)
    );
  };

  return (
    <div className="h-full bg-[#062430] rounded-md overflow-y-auto">
      {!hasGameStarted ? (
        <div className="text-white flex flex-col items-center justify-around h-full">
          <Image src={simonPng} alt="simon game" height={100} width={100} />
          <button
            className="bg-primaryOrange text-primary p-1 rounded-md"
            onClick={startGame}
          >
            start-game
          </button>
        </div>
      ) : (
        <div>
          {hasUserMadeMistake ? (
            <div className="text-white text-center">
              Game Over, Try again later. Press any key to continue
            </div>
          ) : (
            <>
              <div className="text-white">Score: {score}</div>
              <button onClick={showHint} className="text-white bg-red-500 p-1">
                Show hint
              </button>
            </>
          )}
          <div className="grid grid-cols-2 gap-5 px-4 py-4">
            {colors.map((item, index) => (
              <div
                key={`id-${item}`}
                id={`id-${item}`}
                onClick={() => updateUserInput(item)}
              >
                <button
                  className={`h-[12.5vh] w-full ${boxColor[index]} transform transition duration-200 active:scale-95 rounded-lg`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Game;
