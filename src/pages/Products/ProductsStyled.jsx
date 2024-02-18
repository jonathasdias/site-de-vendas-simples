import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiLoader2Fill } from "react-icons/ri";

export const H1 = styled.h1`
    background-color: gray;
    padding: 10px 20px;
    color: ${({theme})=> theme.textColor};
    
`

export const Loading = styled(RiLoader2Fill)`
    color: ${({theme})=> theme.textColor};
    width: 100%;
    font-size: 2em;
    animation: spin 1.6s infinite linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export const SpanAlert = styled.span`
    display: block;
    text-align: center;
    font-size: 1.6em;
    font-weight: bolder;
    color: ${({theme})=> theme.textColor};
    padding: 1rem;
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1rem;
    gap: 1rem;
`

export const ProductStyled = styled(Link)`
    background-color: ${({theme})=> theme.black};
    text-decoration: none;
    color: white;
    padding: 10px;
    color: ${({theme})=> theme.textColor};
    border-radius: 10px;
    transition: all .5s;

    &:hover {
        box-shadow: 2px 6px 18px black;
        transform: scale(1.02);
    }

    figure {
        width: 100%;
        height: 12rem;

        img {
            border-radius: 10px;
        }
    }

    p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        padding-top: 6px;
        word-spacing: 4px;
    }

    span {
        display: block;
        padding: 10px 0;
    }
`