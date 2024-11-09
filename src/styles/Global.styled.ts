import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 1px solid red;
    }

    &::-webkit-scrollbar {
        width: 10px; /* Ширина скроллбара */
    }

    &::-webkit-scrollbar-track {
        background: ${theme.colors.secondaryBg}; /* Цвет фона трека */
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primaryBg}; /* Цвет ползунка */
        border-radius: 10px; /* Скругление углов ползунка */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.colors.accent}; /* Цвет ползунка при наведении */
    }
    
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

    section {
        padding: 100px 0;
        
        @media ${theme.media.mobile} {
            padding: 40px 0 90px;
        }
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    p {
        line-height: 1.8;
        font-size: 20px;
    }

    h3,
    h1 {
        font-family: "Playfair Display", sans-serif;
        font-weight: 700;
    }

    button {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input:focus-visible {
        border-color: ${theme.colors.accent};
    }
`