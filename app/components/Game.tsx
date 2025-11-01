import React, { useEffect, useRef, useState } from "react";
import { getAssetPath } from "../utils/utils";
import simonPng from "@/public/assets/simon.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setGameScore, resetGameScore } from "../Slice/vitalInfo";
const colors = ["red", "green", "blue", "yellow"];
const boxColor = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];
const blinkClass = "opacity-20";
const Game = () => {
  const dispatch = useDispatch();
  const [gameSequence, updateGameSequence] = React.useState<any>([]);
  const [userSequence, updateUserSequence] = React.useState<string[]>([]);
  const [hasGameStarted, updateGameStatus] = React.useState<boolean>(false);
  const [noOfPress, updateNoOfPress] = React.useState<number>(0);
  const [hasUserMadeMistake, updateUserMistakeStatus] =
    React.useState<boolean>(false);
  const [score, updateScore] = useState(0);
  const [hasUserWon, setHasUserWon] = React.useState<boolean>(false);
  const audioMapRef = useRef<Record<string, HTMLAudioElement>>({});
  const audioPrimedRef = useRef<boolean>(false);

  const playAudio = React.useCallback((color) => {
    const audioEl = audioMapRef.current[color];
    if (!audioEl) return;
    try {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.play().catch(() => {});
    } catch (e) {
      // ignore
    }
  }, []);

  const primeAudio = React.useCallback(async () => {
    if (audioPrimedRef.current) return;
    const entries = Object.values(audioMapRef.current);
    if (entries.length === 0) return;
    try {
      await Promise.all(
        entries.map(async (a) => {
          a.muted = true;
          try {
            await a.play();
          } catch {}
          a.pause();
          a.currentTime = 0;
          a.muted = false;
        })
      );
      audioPrimedRef.current = true;
    } catch {}
  }, []);

  const animatePress = React.useCallback(
    (selectedColor) => {
      const element = document.querySelector(`#id-${selectedColor}`) as HTMLElement | null;
      playAudio(selectedColor);
      if (element) {
        element.classList.add(blinkClass);
        const buttonEl = element.querySelector("button");
        if (buttonEl) {
          buttonEl.classList.add("scale-95");
          setTimeout(() => buttonEl.classList.remove("scale-95"), 120);
        }
        setTimeout(() => element.classList.remove(blinkClass), 100);
      }
    },
    [playAudio]
  );

  const generateSequnce = React.useCallback(() => {
    const newGeneratedColor = colors[Math.floor(Math.random() * colors.length)];
    // showHint();
    setTimeout(() => animatePress(newGeneratedColor), 300);
    updateGameSequence((prev) => [...prev, newGeneratedColor]);
  }, [animatePress]);

  const startGame = React.useCallback(() => {
    primeAudio();
    updateGameStatus(true);
    dispatch(setGameScore(0));
    generateSequnce();
  }, [generateSequnce, dispatch, primeAudio]);

  const captureUserInputandProceed = React.useCallback(
    (length, newUserInput) => {
      if (newUserInput[length - 1] === gameSequence[length - 1]) {
        if (newUserInput.length === gameSequence.length) {
          const newScore = score + 1;
          updateScore(newScore);
          dispatch(setGameScore(newScore));
          if (newScore >= 5) {
            setHasUserWon(true);
            updateUserMistakeStatus(true); // trigger end screen with win message
          } else {
            setTimeout(() => {
              if (!hasUserMadeMistake) generateSequnce();
            }, 1000);
          }
          updateUserSequence([]);
        }
      } else {
        updateUserMistakeStatus(true);
      }
    },
    [gameSequence, hasUserMadeMistake, generateSequnce, score, dispatch]
  );

  // Preload audio files from public/sounds
  useEffect(() => {
    const sources: Record<string, string> = {
      red: getAssetPath("/assets/sounds/red.mp3"),
      green: getAssetPath("/assets/sounds/green.mp3"),
      blue: getAssetPath("/assets/sounds/blue.mp3"),
      yellow: getAssetPath("/assets/sounds/yellow.mp3"),
      wrong: getAssetPath("/assets/sounds/wrong.mp3"),
    };
    const map: Record<string, HTMLAudioElement> = {};
    Object.entries(sources).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      map[key] = audio;
    });
    audioMapRef.current = map;
    return () => {
      Object.values(audioMapRef.current).forEach((a) => {
        try {
          a.pause();
          // @ts-ignore
          a.src = "";
        } catch {}
      });
    };
  }, []);

  const updateUserInput = React.useCallback(
    (color) => {
      primeAudio();
      animatePress(color);
      updateNoOfPress(noOfPress + 1);
      const newUserInput = [...userSequence, color];
      updateUserSequence(newUserInput);
      captureUserInputandProceed(newUserInput.length, newUserInput);
    },
    [noOfPress, userSequence, captureUserInputandProceed, animatePress, primeAudio]
  );

  const restartGame = React.useCallback(() => {
    // Reset state and immediately start a new round
    updateGameSequence([]);
    updateUserSequence([]);
    updateNoOfPress(0);
    updateUserMistakeStatus(false);
    updateScore(0);
    dispatch(setGameScore(0));
    updateGameStatus(true);
    generateSequnce();
  }, [dispatch, generateSequnce]);

  useEffect(() => {
    if (hasUserMadeMistake && !hasUserWon) playAudio("wrong");
  }, [hasUserMadeMistake, hasUserWon, playAudio]);

  useEffect(() => {
    if (!hasUserMadeMistake) return;
    const restartOnKey = () => restartGame();
    window.addEventListener("keydown", restartOnKey);
    return () => window.removeEventListener("keydown", restartOnKey);
  }, [hasUserMadeMistake, restartGame]);

  useEffect(() => {
    if (hasGameStarted) return;
    const updateGameStatusFunction = (e) => {
      if (e.key === "a" || e.key === "A") {
        startGame();
      }
    };
    window.addEventListener("keydown", updateGameStatusFunction);
    return () =>
      window.removeEventListener("keydown", updateGameStatusFunction);
  }, [startGame, hasGameStarted]);

  const showHint = () => {
    gameSequence.forEach((color, index) =>
      setTimeout(() => animatePress(color), (index + 1) * 500)
    );
  };

  return (
    <div className="h-full bg-[#062430] rounded-md overflow-y-auto">
      {!hasGameStarted ? (
        <div className="text-white flex flex-col items-center justify-around h-full">
          <Image 
            src={simonPng} 
            alt="simon game" 
            height={100} 
            width={100}
            priority
            loading="eager"
          />
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
            <div className="h-full flex flex-col justify-center">
              <div className="flex justify-center pt-8 pb-10">
                <Image 
                  src={simonPng} 
                  alt="simon game" 
                  height={100} 
                  width={100}
                  priority
                  loading="eager"
                />
              </div>
              <div className="w-full bg-[#011628] py-4 flex items-center justify-center">
                <div className="text-[#43d9ad] text-2xl tracking-widest">{hasUserWon ? "WELL DONE!" : "GAME OVER!"}</div>
              </div>
              <div className="flex-1 flex items-start justify-center pt-8">
                <button onClick={restartGame} className="text-sm">
                  start-again
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-white">Score: {score}</div>
              <button onClick={showHint} className="text-white bg-red-500 p-1">
                Show hint
              </button>
            </>
          )}
          {!hasUserMadeMistake && (
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
          )}
        </div>
      )}
    </div>
  );
};
export default React.memo(Game);
