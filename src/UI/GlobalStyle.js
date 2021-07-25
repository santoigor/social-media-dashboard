import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     * {
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        background: ${({theme}) => theme.bodyBackground};
    }
`;