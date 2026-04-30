/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Header } from "./components/Header.jsx";
import { GameStatus } from "./components/GameStatus.jsx";
import { GameBoard } from "./components/GameBoard.jsx";

export function App() {
  return (
    <Page>
      <Header />

      <GameLayout>
        <GameStatus />
        <GameBoard />
      </GameLayout>
    </Page>

  );
}

const Page = styled.body`
  padding: 2rem 3rem;
  background-color: ${({theme}) => theme.color.background};
`;

const GameLayout = styled.section `
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;