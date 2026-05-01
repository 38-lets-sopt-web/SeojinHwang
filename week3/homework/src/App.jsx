/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Header } from "./components/Header.jsx";
import { GameStatus } from "./components/GameStatus.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState, useEffect } from "react";
import { RankingBoard } from "./components/RankingBoard.jsx";
import { ResultModal } from "./components/ResultModal.jsx";

export function App() {
  const [currentTab, setCurrentTab] = useState("game");
  const [isPlaying, setIsPlaying] = useState(false);

  const LvInfo = {
    1: {time: 15, size: 2},
    2: {time: 20, size: 3},
    3: {time: 30, size: 4}
  };
  const [currentLv, setCurrentLv] = useState(1); 
  const [timeLeft, setTimeLeft] = useState(LvInfo[currentLv].time);

  useEffect(() => {
    if (!isPlaying) return;
    const Timer = setTimeout(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          setIsPlaying(false);
          setIsOpen(true);
          return 0;
        }

        return (prev - 0.1).toFixed(1);
      })
    }, 100);

    return () => clearTimeout(Timer);
  }, [isPlaying, timeLeft, setTimeLeft]);

  const [message, setMessage] = useState(null);
  const [score, setScore] = useState(0);
  const [successScore, setSuccessScore] = useState(0);
  const [failScore, setFailScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const resetGame = () => {
    setTimeLeft(LvInfo[currentLv].time);
    setScore(0);
    setSuccessScore(0);
    setFailScore(0);
    setMessage(null);
    setIsPlaying(false);
  }

  return (
    <Page>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>

      {
        currentTab === "game" && <GameLayout>
                                  <GameStatus 
                                  timeLeft={timeLeft}
                                  score={score}
                                  successScore={successScore}
                                  failScore={failScore}
                                  message={message}
                                  />
                                  <GameBoard
                                  isPlaying={isPlaying}
                                  setIsPlaying={setIsPlaying}
                                  setTimeLeft={setTimeLeft}
                                  currentLv={currentLv}
                                  setCurrentLv={setCurrentLv}
                                  LvInfo={LvInfo}
                                  setScore={setScore}
                                  setSuccessScore={setSuccessScore}
                                  setFailScore={setFailScore}
                                  setMessage={setMessage}
                                  />
                                  <ResultModal
                                  score={score}
                                  currentLv={currentLv}
                                  isOpen={isOpen}
                                  setIsOpen={setIsOpen}
                                  resetGame={resetGame}
                                  />
                                </GameLayout>
      }

      {
        currentTab === "ranking" && <RankingBoard />
      }
    </Page>

  );
}

const Page = styled.main`
  min-height: 100vh;
  padding: 2rem 5rem;
  background-color: ${({theme}) => theme.color.background};
`;

const GameLayout = styled.section `
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;