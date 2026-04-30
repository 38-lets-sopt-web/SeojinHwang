import { css } from "@emotion/react";

const GlobalStyle = css`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }

    button {
    border: none;
    background-color: none;
    cursor: pointer;
    font: inherit;
    }
`;

export default GlobalStyle;
