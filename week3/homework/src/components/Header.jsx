/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export function Header () {
    return (
        <HeaderGroup className="mainHeader">
            <Title>두더지 게임</Title>

            <HeaderButton
            type="button"
            >
                게임
            </HeaderButton>

            <HeaderButton
            type="button"
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
    border: 1.3px solid ${({theme}) => theme.color.primary};
    border-radius: 2rem;
    padding: 0.6rem 1.5rem;
    background-color: ${({theme}) => theme.color.body};
    color: ${({theme}) => theme.color.primary};
    font-size: ${({theme}) => theme.font.sm};
    font-weight: 600;
`;