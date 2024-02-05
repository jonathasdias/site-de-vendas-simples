import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1 = styled.h1`
    background-color: gray;
    padding: 10px 20px;
    color: ${({theme})=> theme.textColor};
    
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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

    figure {
        width: 100%;
        height: 12rem;

        img {
            border-radius: 10px;
        }
    }

    h4 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        padding-top: 6px;
        word-spacing: 4px;
    }

    p {
        padding: 10px 0;
    }
`