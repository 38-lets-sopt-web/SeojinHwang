/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export function GameStatus() {
    return (
        <StatusSection>
            <StatusBox>
                <TimeHeader>남은 시간</TimeHeader>
                <RestTime>20.0</RestTime>
            </StatusBox>

            <StatusBox>
                <TotalHeader>총 점수</TotalHeader>
                <TotalScore>0</TotalScore>
            </StatusBox>

            <ResultSection>
                <StatusBox>
                    <SuccessHeader>성공</SuccessHeader>
                    <Count>0</Count>
                </StatusBox>

                <StatusBox>
                    <FailHeader>실패</FailHeader>
                    <Count>0</Count>
                </StatusBox>
            </ResultSection>

            <StatusBox>
                <NoticeHeader>안내 메시지</NoticeHeader>
            </StatusBox>
        </StatusSection>
    );
}

const StatusSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 27rem;
    gap: 1.5rem;
`;

const StatusBox = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    gap: 0.5rem;
    background-color: ${({theme}) => theme.color.body};
`;

const TimeHeader = styled.h3`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.md};
    font-weight: 500;
`;

const RestTime = styled.p`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.xl};
`;

const TotalHeader = styled.h3`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.md};
    font-weight: 500;
`;

const TotalScore = styled.p`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.xl};
`;

const ResultSection = styled.section`
    display: flex;
    gap: 1.5rem;
`;

const SuccessHeader = styled.h3`
    color: ${({theme}) => theme.color.success};
    font-size: ${({theme}) => theme.font.md};
    font-weight: 500;

`;

const FailHeader = styled.h3`
    color: ${({theme}) => theme.color.fail};
    font-size: ${({theme}) => theme.font.md};
    font-weight: 500;

`;

const Count = styled.p`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.xl};
`;

const NoticeHeader = styled.h3`
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.md};
    font-weight: 500;
`;