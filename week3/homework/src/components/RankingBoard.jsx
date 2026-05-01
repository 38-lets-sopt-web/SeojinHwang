/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import { clearRanking, getRanking } from "../storage";

export function RankingBoard() {
    const [rankings, setRankings] = useState(() => getRanking());
    const sortedRankings = [...rankings].sort((a, b) => {
        if (b.level !== a.level) return b.level - a.level;
        return b.score - a.score;
    });

    const clearBtn = () => {
        const cleared = clearRanking();
        if (cleared) setRankings([]);
    }

    return (
        <RankingSection>
            <RankingHeader>
                <RankTitle>랭킹 보드</RankTitle>
                <ResetButton
                    type="button"
                    onClick={clearBtn}
                >
                    기록 초기화
                </ResetButton>
            </RankingHeader>

            <RankingTable>
                {sortedRankings.length > 0 ? (
                    <>
                        <thead>
                            <tr>
                                <th>순위</th>
                                <th>레벨</th>
                                <th>점수</th>
                                <th>기록 시각</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortedRankings.map((rank, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>Level {rank.level}</td>
                                    <td>{rank.score}점</td>
                                    <td>{rank.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                )
                :(
                    <p>아직 기록이 없습니다. 게임을 시작해보세요!</p>
                )}
                
            </RankingTable>
        </RankingSection>
    );
}

const RankingSection = styled.section`
    width: 100%;
    height: 65rem;
    margin-top: 3rem;
    border-radius: 1.5rem;
    padding: 2rem;
    background-color: ${({theme}) => theme.color.body};
`;

const RankingHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RankTitle = styled.h2`
    padding: 1rem;
    color: ${({theme}) => theme.color.text};
    font-size: ${({theme}) => theme.font.lg};
`;

const ResetButton = styled.button`
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background-color: ${({theme}) => theme.color.fail};
    color: ${({theme}) => theme.color.gamepad};
    font-size: ${({theme}) => theme.font.sm};
    font-weight: 500;
`;

const RankingTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    th {
        background-color: ${({theme}) => theme.color.primary};
        padding: 1.5rem;
        color: ${({theme}) => theme.color.text};
        font-size: ${({theme}) => theme.font.sm};
        font-weight: 600;
    }

    td {
        padding: 1.5rem;
        border-bottom: 1px solid ${({theme}) => theme.color.gamepad};
        font-size: ${({theme}) => theme.font.xs};
        color: ${({theme}) => theme.color.text};
    }

    p {
        font-size: ${({theme}) => theme.font.xs};
        color: ${({theme}) => theme.color.backdrop};
        margin: 3rem;
    }
`;