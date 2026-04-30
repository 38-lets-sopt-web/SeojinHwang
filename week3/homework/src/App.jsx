/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Header } from "./components/Header.jsx";
import { GameStatus } from "./components/GameStatus.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState } from "react";
import { RankingBoard } from "./components/RankingBoard.jsx";

export function App() {
  const [currentTab, setCurrentTab] = useState("game");

  return (
    <Page>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>

      {
        currentTab === "game" && <GameLayout>
                                  <GameStatus />
                                  <GameBoard />
                                </GameLayout>
      }

      {
        currentTab === "ranking" && <RankingBoard />
      }
    </Page>

  );
}

const Page = styled.body`
  padding: 2rem 5rem;
  background-color: ${({theme}) => theme.color.background};
`;

const GameLayout = styled.section `
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;