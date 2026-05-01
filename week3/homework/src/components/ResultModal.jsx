/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export function ResultModal({score, currentLv, isOpen, setIsOpen, resetGame}) {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (!isOpen) return;

        const ModalTimer = setTimeout(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    setIsOpen(false);
                    resetGame();
                    return 3;
                }

                return prev - 1;
            })
        }, 1000);

        return () => clearTimeout(ModalTimer);
    }, [isOpen, setIsOpen, count, setCount, resetGame])

    if (!isOpen) return;

    return createPortal(
        <ModalBackdrop>
            <ModalContent>
                <h2>Level {currentLv} 게임 종료!</h2>
                <h3>최종 점수: {score}점</h3>
                <p>{count}초 후 게임이 리셋됩니다...</p>
            </ModalContent>
        </ModalBackdrop>,
        document.body
    );
}

const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 1000;
    inset: 0;
    background-color: ${({theme}) => theme.color.backdrop};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    width: 25rem;
    height: 15rem;
    background-color: ${({theme}) => theme.color.gamepad};
    border-radius: 1.5rem;
    box-shadow: 0 0 2rem #a1a1a1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        color: ${({theme}) => theme.color.text};
        font-size: ${({theme}) => theme.font.md};
    }

    h3 {
        color: ${({theme}) => theme.color.primary};
        font-size: ${({theme}) => theme.font.lg};
    }

    p {
        color: ${({theme}) => theme.color.text};
        font-size: ${({theme}) => theme.font.sm};
        font-weight: 500;
    }
`;