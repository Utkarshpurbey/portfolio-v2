import React, { useEffect, useState } from "react";
const Game = () => {
  const colors = ["red", "green", "blue", "yellow"];
  const boxColor = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
  ];
  const blinkClass = "opacity-20";
  const [gameSequence, updateGameSequence] = React.useState([]);
  const [userSequence, updateUserSequence] = React.useState<string[]>([]);
  const [hasGameStarted, updateGameStatus] = React.useState<boolean>(false);
  const [noOfPress, updateNoOfPress] = React.useState<number>(0);
  const [hasUserMadeMistake, updateUserMistakeStatus] =
    React.useState<boolean>(false);
  const [score, updateScore] = useState(0);

  const generateSequnce = () => {
    const newGeneratedColor = colors[Math.floor(Math.random() * colors.length)];
    setTimeout(() => {
      animatePress(newGeneratedColor);
    }, 300);
    updateGameSequence([...gameSequence, newGeneratedColor]);
  };

  const updateUserInput = (color) => {
    updateNoOfPress(noOfPress + 1);
    updateUserSequence([...userSequence, color]);
    const newUserInput = [...userSequence, color];
    captureUserInputandProceed(newUserInput.length, newUserInput);
  };

  const captureUserInputandProceed = (length, newUserInput) => {
    console.log(newUserInput, gameSequence);
    if (newUserInput[length - 1] === gameSequence[length - 1]) {
      if (newUserInput.length === gameSequence.length) {
        updateScore(score + 1);
        setTimeout(() => {
          if (!hasUserMadeMistake) {
            generateSequnce();
          }
        }, 1000);
        updateUserSequence([]);
      }
    } else {
      updateUserMistakeStatus(true);
    }
  };

  const resetGame = () => {
    if (window) {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (hasUserMadeMistake) {
      playAudio('wrong')
      // setTimeout(() => {
      //   resetGame();
      // }, 1000);
    }
  }, [hasUserMadeMistake]);

  const playAudio = (color) => {
    const sound = new Audio(`../sounds/${color}.mp3`);
    sound.play();
  }

  const animatePress = (selectedColor) => {
    if (document) {
      const element = document.querySelector(`#id-${selectedColor}`);
      playAudio(selectedColor);
      if (element) {
        element.classList.add(blinkClass);
      }
      setTimeout(() => {
        if (element) {
          element.classList.remove(blinkClass);
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (window) {
      const updateGameStatusFunction = (e) => {
        if (e.key === "a" || e.key === "A") {
          updateGameStatus(true);
          generateSequnce();
          window.removeEventListener("keydown", updateGameStatusFunction);
        }
      };
      window.addEventListener("keydown", updateGameStatusFunction);
      return () => {
        window.removeEventListener("keydown", updateGameStatusFunction);
      };
    }
  }, []);

  const showHint = () => {
    if (gameSequence.length > 0) {
      gameSequence.forEach((color, index) => {
        setTimeout(() => {
          animatePress(color);
        }, index * 500);
      });
    }
  };

  return (
    <div className="bg-black ">
      {!hasGameStarted ? (
        <div
          id="start-game"
          className="text-white flex justify-center aling-center "
        >
          Press "a" from keyboard to start playing the game
        </div>
      ) : (
        <div>
          <div>
            {
              hasUserMadeMistake ? (
                <div className="text-white text-center">
                  Game Over, Try again later. Press any key to continue
                </div>
              ) : (
                <>
                  <div className="text-[#fff]">Score:- {score}</div>
                  <div>
                    <button onClick={showHint} className="text-[#fff] bg-red-500 p-1">
                      Show hint
                    </button>
                  </div></>)
            }
          </div>
          <div className="grid grid-cols-2 gap-5 px-4 py-4">
            {colors?.map((item, index) => (
              <div
                key={`id-${item}-index-${index}`}
                id={`id-${item}`}
                onClick={() => {
                  playAudio(item)
                  updateUserInput(item)
                }}
              >
                <button
                  className={`h-[20vh] w-full ${boxColor[index]} 
                transform transition duration-200 active:scale-95 rounded-lg`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Game;
