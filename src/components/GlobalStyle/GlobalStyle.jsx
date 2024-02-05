import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    * {margin: 0; padding: 0;box-sizing: border-box;}
    
    body {
        background-color: ${({theme})=> theme.sombra};
    }

    img {
        width: 100%;
        height: 100%;
    }

    button {
        cursor: pointer;
    }
`
export default Globalstyle;