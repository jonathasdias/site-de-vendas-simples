import styled from "styled-components";

export const ContainerBtnsPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    button:last-child {
        margin-left: 10px;
    }

    button:first-child {
        margin-right: 10px;
    }
    
    button {
        background-color: ${({theme})=> theme.black};
        color: ${({theme})=> theme.textColor};
        font-size: 1.2em;
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        border: 2px solid gray;
        transition: all .3s;

        &:hover {
            background-color: gray;
        }
    }

    @media (max-width: 760px) {
        padding: 1rem .5rem;
    }
`