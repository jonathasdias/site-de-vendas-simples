import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionProducts = styled.section`
    padding: 20px 10px;
    width: 100%;
    height: calc(100vh - 6rem);
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &::-webkit-scrollbar {
        width: 12px;
        background-color: rgb(202, 198, 198);
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: rgb(179, 169, 169);
        border-radius: 1rem;

        &:hover {
            background-color: rgb(167, 158, 158);
        }
        &:active {
            background-color: rgb(158, 150, 150);
        }
    }
`

export const Product = styled.article`
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid black;
    min-height: 12rem;
    
    figure {
        height: 100%;
        min-width: 12rem;
        width: 12rem;
    }

    div {
        padding: 4px 6px;
        
        p {
            margin-bottom: 6px;
            color: ${({theme})=> theme.textColor};
        }
    }

    @media (max-width: 760px) {

        flex-direction: column;
        min-height: auto;

        figure {
            max-height: 16rem;
            width: auto;
        }

    }
`

export const LinkProducts = styled(Link)`
    color: ${({theme})=> theme.textColor};

    &:hover {
        color: blue;
    }
`

export const ButtonRemove = styled.button`
    background-color: transparent;
    border: none;
    color: rgb(11, 11, 175);
    margin: 10px 0;
    font-weight: bolder;
`

export const SectionQuantity = styled.section`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    span {
        font-size: 1.2em;
        color: ${({theme})=> theme.textColor};
    }

    button {
        width: 2rem;
        height: 2rem;
        font-size: 1.4em;
        font-weight: bolder;
        border-radius: 100%;
        border: none;
        background-color: transparent;
        color: ${({theme})=> theme.textColor};

        &:hover {
            background-color: gray;
        }
    }

`

export const H1Alert = styled.h1`
    padding: 2rem;
    text-align: center;
    font-size: 2em;
    color: ${({theme})=>theme.textColor};
`