/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export function GameBoard() {
    return (
        <MainBoard>
            <BoardHeader>
                <LevelSelect>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                </LevelSelect>
                
                <ButtonGroup>
                    <StartButton
                    type="button"
                    >
                        시작
                    </StartButton>
                    <StopButton
                    type="button"
                    >
                        중단
                    </StopButton>
                </ButtonGroup>
            </BoardHeader>

            <GamePad>
                <Card></Card>
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70rem;
    height: 53rem;
    border-radius: 1rem;
    margin: 1rem auto;
    background-color: ${({theme}) => theme.color.gamepad};
`;

const Card = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: ${({theme}) => theme.color.primary};
    border-radius: 50%;
`;