/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export function Header ({currentTab, setCurrentTab}) {
    return (
        <HeaderGroup className="mainHeader">
            <Title>두더지 게임</Title>

            <HeaderButton
                type="button"
                active={currentTab === "game"}
                onClick={() => setCurrentTab("game")}
            >
                게임
            </HeaderButton>

            <HeaderButton
                type="button"
                active={currentTab === "ranking"}
                onClick={() => setCurrentTab("ranking")}
            >
                랭킹
            </HeaderButton>
        </HeaderGroup>
    );
}

const HeaderGroup = styled.header`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: ${({theme}) => theme.color.body};
    width: 100%;
    padding: 2rem;
    border-radius: 1.5rem;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.lg};
    margin-right: 0.8rem;
`;

const HeaderButton = styled.button`
    border-radius: 2rem;
    padding: 0.6rem 1.5rem;
    font-size: ${({theme}) => theme.font.xs};
    font-weight: 600;
    border: 1.3px solid ${({theme}) => theme.color.primary};
    background-color: ${({active, theme}) => active ? theme.color.primary : theme.color.body};
    color: ${({active, theme}) => active ? theme.color.gamepad : theme.color.primary};

`;