import styled from "styled-components";

export const Wapper = styled.section`
    display: flex;
    justify-content: space-between;
`

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

export const SectionPayment = styled.section`
    padding: 10px;
    background-color: rgb(247, 244, 244);
    border-radius: 2rem;
    margin: 2rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36rem;
    max-height: 20rem;
    
    p {
        margin: 10px 0;
        font-size: 1.1em;

        span {
            font-weight: bolder;
        }
    }

    button {
        padding: 6px 10px;
        font-size: 1em;
        background-color: green;
        border-radius: 10px;
        cursor: pointer;
    }
`
export const Product = styled.article`
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid black;
    min-height: 8rem;

    figure {
        height: 100%;
        min-width: 12rem;
    }

    div {
        padding: 4px 6px;
        
        p {
            margin-bottom: 6px;
        }
    }
`

export const ButtonRemove = styled.button`
    background-color: transparent;
    border: none;
    color: #0b0baf;
    cursor: pointer;
    margin: 10px 0;
    font-weight: bolder;

`

export const SectionQuantity = styled.section`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    span {
        font-size: 1.2em;
    }

    button {
        width: 2rem;
        height: 2rem;
        font-size: 1.4em;
        font-weight: bolder;
        border-radius: 100%;
        border: none;
        cursor: pointer;
        background-color: transparent;

        &:hover {
            background-color: gray;
        }
    }

`
