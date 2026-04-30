/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import keroppi from "./image/keroppi.png";
import { useState, useEffect } from "react";

export function GameBoard({
    isPlaying,
    setIsPlaying,
    setTimeLeft,
    currentLv,
    setCurrentLv,
    LvInfo
}) {
    const cardSize = LvInfo[currentLv].size;
    const cardCount = cardSize * cardSize;
    const cards = Array.from({ length: cardCount }, (v, i) => ({ id: i }));

    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        if (!isPlaying) return;

        const Random = setInterval(() => {
            const randomId = Math.floor(Math.random() * cardCount);
            setActiveCard(randomId);
        }, 1000);

        return () => clearInterval(Random);
    }, [isPlaying, cardCount, setActiveCard])

    return (
        <MainBoard>
            <BoardHeader>
                <LevelSelect
                onChange={(e) => {
                    setCurrentLv(e.target.value);
                    setTimeLeft(LvInfo[e.target.value].time)
                }}
                >
                    <option value={1}>Level 1</option>
                    <option value={2}>Level 2</option>
                    <option value={3}>Level 3</option>
                </LevelSelect>
                
                <ButtonGroup>
                    <StartButton
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    >
                        시작
                    </StartButton>
                    <StopButton
                    type="button"
                    onClick={() => {
                        setTimeLeft(LvInfo[currentLv].time);
                        setIsPlaying(false);
                    }}
                    >
                        중단
                    </StopButton>
                </ButtonGroup>
            </BoardHeader>

            <GamePad size={cardSize}>
                {cards.map((card) => (
                    <Card key={card.id} size={cardSize}>
                        {isPlaying && card.id === activeCard &&(
                            <Images 
                            src={keroppi}
                            >
                            </Images>
                        )}
                    </Card>
                ))}
            </GamePad>
        </MainBoard>
    );
}

const MainBoard = styled.main`
    width: 100%;
    height: 65rem;
    border-radius: 1.5rem;
    background-color: ${({theme}) => theme.color.body};
`;

const BoardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 2rem;
`;

const LevelSelect = styled.select`
    padding: 1rem 3rem;
    border: none;
    background-color: ${({theme}) => theme.color.background};
    border-radius: 1rem;
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.lg};
    font-weight: 600;
`;

const ButtonGroup = styled.div`
    display: flex;
    padding: 1rem;
    gap: 1rem;
`;

const StartButton = styled.button`
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background-color: ${({theme}) => theme.color.success};
    color: ${({theme}) => theme.color.gamepad};
    font-size: ${({theme}) => theme.font.xs};
    font-weight: 500;
`;

const StopButton = styled.button`
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background-color: ${({theme}) => theme.color.fail};
    color: ${({theme}) => theme.color.gamepad};
    font-size: ${({theme}) => theme.font.xs};
    font-weight: 500;
`;

const GamePad = styled.div`
    display: grid;
    grid-template-columns: repeat(${({size}) => size}, max-content);
    grid-template-rows: repeat(${({size}) => size}, max-content);
    gap: 1rem;
    place-items: center;
    place-content: center;
    width: 70rem;
    height: 53rem;
    border-radius: 1rem;
    margin: 1rem auto;
    background-color: ${({theme}) => theme.color.gamepad};
`;

const Card = styled.div`
    width: ${({size}) => {
        if (size === 2) return "25rem";
        else if (size === 3) return "16rem";
        else return "12rem";
    }};
    height: ${({size}) => {
        if (size === 2) return "25rem";
        else if (size === 3) return "16rem";
        else return "12rem";
    }};
    background-color: ${({theme}) => theme.color.primary};
    border-radius: 50%;
`;

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    cursor: pointer;
`;