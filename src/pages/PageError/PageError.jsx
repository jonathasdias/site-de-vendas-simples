import styled from "styled-components";

const H1Styled = styled.h1`
    background-color: black;
    color: rgb(211, 200, 200);
    text-align: center;
`

export default function PageError() {
    return(
        <>
            <H1Styled>Página não encontrada ou não existe</H1Styled>
        </>
    )
}