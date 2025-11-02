import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import simonPng from "@/public/assets/simon.png";
import { getAssetPath } from "../utils/utils";
import { useDispatch } from "react-redux";
import { setGameScore } from "../Slice/vitalInfo";

const colors = ["red", "green", "blue", "yellow"] as const;
const boxColor = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];
const BLINK_CLASS = "opacity-20";
const press = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Game: React.FC = () => {
  const dispatch = useDispatch();

  const [sequence, setSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [mistake, setMistake] = useState(false);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const [acceptingInput, setAcceptingInput] = useState(true); // <-- new flag

  const audioMapRef = useRef<Record<string, HTMLAudioElement>>({});
  const audioPrimedRef = useRef(false);

  const playAudio = useCallback((key: string) => {
    const audio = audioMapRef.current[key];
    if (!audio) return;
    try {
      audio.pause();
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    } catch {
      /* ignore */
    }
  }, []);

  const primeAudio = useCallback(async () => {
    if (audioPrimedRef.current) return;
    const audios = Object.values(audioMapRef.current);
    if (!audios.length) return;
    try {
      await Promise.all(
        audios.map(async (a) => {
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
    } catch {
      /* ignore */
    }
  }, []);

  const animatePress = useCallback(
    (color: string) => {
      const el = document.querySelector(`#id-${color}`) as HTMLElement | null;
      playAudio(color);
      if (!el) return;
      el.classList.add(BLINK_CLASS);
      const btn = el.querySelector("button");
      if (btn) {
        btn.classList.add("scale-95");
        setTimeout(() => btn.classList.remove("scale-95"), 120);
      }
      setTimeout(() => el.classList.remove(BLINK_CLASS), 100);
    },
    [playAudio]
  );

  const generateSequence = useCallback(() => {
    // disable input while animating new color
    setAcceptingInput(false);

    const next = colors[Math.floor(Math.random() * colors.length)];
    setSequence((s) => {
      const newSeq = [...s, next];
      // animate the new color a bit after push so UI updates
      setTimeout(() => {
        animatePress(next);
        // re-enable user input after the animation finishes (small buffer)
        setTimeout(() => setAcceptingInput(true), 200);
      }, 300);
      return newSeq;
    });
  }, [animatePress]);

  const startGame = useCallback(() => {
    primeAudio();
    setStarted(true);
    setScore(0);
    dispatch(setGameScore(0));
    setSequence([]);
    setUserInput([]);
    setMistake(false);
    setWon(false);
    setAcceptingInput(false);
    // start after small delay so UI settles
    setTimeout(() => {
      generateSequence();
      // generateSequence will re-enable input after animating
    }, 150);
  }, [dispatch, generateSequence, primeAudio]);

  const restartGame = useCallback(() => {
    setSequence([]);
    setUserInput([]);
    setMistake(false);
    setWon(false);
    setScore(0);
    dispatch(setGameScore(0));
    setStarted(true);
    setAcceptingInput(false);
    setTimeout(() => generateSequence(), 100);
  }, [dispatch, generateSequence]);

  const handleUserInput = useCallback(
    (color: string) => {
      // if inputs are not being accepted, ignore click (or mark mistake if desired)
      if (!acceptingInput || mistake) return;

      primeAudio();
      animatePress(color);

      const newInput = [...userInput, color];

      // Immediate mistake if user tries to input more items than sequence length
      if (newInput.length > sequence.length) {
        setMistake(true);
        return;
      }

      // compare current index
      const idx = newInput.length - 1;
      if (newInput[idx] !== sequence[idx]) {
        setMistake(true);
        return;
      }

      // correct so far
      if (newInput.length === sequence.length) {
        // prevent further clicks until next sequence is ready
        setAcceptingInput(false);

        const newScore = score + 1;
        setScore(newScore);
        dispatch(setGameScore(newScore));
        setUserInput([]);

        if (newScore >= 5) {
          setWon(true);
          setMistake(true); // show end screen with win message
          return;
        }

        // generate next color after short delay; generateSequence will re-enable input
        setTimeout(() => {
          if (!mistake) generateSequence();
        }, 800);
      } else {
        // still collecting input
        setUserInput(newInput);
      }
    },
    [acceptingInput, animatePress, dispatch, generateSequence, mistake, primeAudio, score, sequence, userInput]
  );

  useEffect(() => {
    const sources: Record<string, string> = {
      red: getAssetPath("/assets/sounds/red.mp3"),
      green: getAssetPath("/assets/sounds/green.mp3"),
      blue: getAssetPath("/assets/sounds/blue.mp3"),
      yellow: getAssetPath("/assets/sounds/yellow.mp3"),
      wrong: getAssetPath("/assets/sounds/wrong.mp3"),
    };
    const map: Record<string, HTMLAudioElement> = {};
    Object.entries(sources).forEach(([k, src]) => {
      const a = new Audio(src);
      a.preload = "auto";
      map[k] = a;
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

  useEffect(() => {
    if (mistake && !won) playAudio("wrong");
  }, [mistake, won, playAudio]);

  useEffect(() => {
    if (!started) {
      const onStartKey = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === "a") startGame();
      };
      window.addEventListener("keydown", onStartKey);
      return () => window.removeEventListener("keydown", onStartKey);
    }
  }, [startGame, started]);

  useEffect(() => {
    if (!mistake) return;
    const onRestartKey = () => restartGame();
    window.addEventListener("keydown", onRestartKey);
    return () => window.removeEventListener("keydown", onRestartKey);
  }, [mistake, restartGame]);

  const showHint = useCallback(() => {
    // play the whole sequence back (disable input while hint plays)
    setAcceptingInput(false);
    sequence.forEach((color, idx) =>
      setTimeout(() => {
        animatePress(color);
        if (idx === sequence.length - 1) {
          // small buffer then re-enable
          setTimeout(() => setAcceptingInput(true), 150);
        }
      }, (idx + 1) * 500)
    );
  }, [animatePress, sequence]);

  return (
    <div className="h-full bg-[#062430] rounded-md overflow-y-auto font-monto">
      {!started ? (
        <div className="text-white flex flex-col items-center justify-around h-full">
          <Image src={simonPng} alt="simon game" height={100} width={100} priority loading="eager" />
          <button className="bg-primaryOrange text-primary p-1 rounded-md" onClick={startGame}>
            start-game
          </button>
        </div>
      ) : (
        <div>
          {mistake ? (
            <div className="h-full flex flex-col justify-center">
              <div className="flex justify-center pt-8 pb-10">
                <Image src={simonPng} alt="simon game" height={100} width={100} priority loading="eager" />
              </div>
              <div className="w-full bg-[#011628] py-4 flex items-center justify-center">
                <div className="text-[#43d9ad] text-2xl tracking-widest">
                  {won ? "WELL DONE!" : "GAME OVER!"}
                </div>
              </div>
              <div className="flex-1 flex items-start justify-center pt-8">
                <button onClick={restartGame} className="text-sm">
                  start-again
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className={`text-white text-xl flex justify-center py-6 ${press.className}`}>
                <div>Score: {score}</div>
              </div>

              <div className="grid grid-cols-2 gap-5 px-4 py-4 animate-fadeInIDE">
                {colors.map((c, i) => (
                  <div key={c} id={`id-${c}`} onClick={() => handleUserInput(c)}>
                    <button className={`h-[10vh] w-full ${boxColor[i]} transform transition duration-200 active:scale-95 rounded-xl`} />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center w-full text-sm hover:scale-105 hover:text-white transition-all duration-200 cursor-pointer">
                <div onClick={showHint}>need-hint?</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(Game);
