import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    body {
        background-color: #D8E9A8;
    }

    button, input {
        border: none;
        outline: none;
    }
`

export default GlobalStyle;