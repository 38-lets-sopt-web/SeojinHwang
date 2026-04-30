/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export function RankingBoard() {
    return (
        <RankingSection>
            <RankingHeader>
                <RankTitle>랭킹 보드</RankTitle>
                <ResetButton
                type="button"
                >
                    기록 초기화
                </ResetButton>
            </RankingHeader>

            <RankingTable>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>레벨</th>
                        <th>점수</th>
                        <th>기록 시각</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Level 1</td>
                        <td>20점</td>
                        <td>2026.4.30. 오후 6:00:00</td>
                    </tr>
                </tbody>
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
`;