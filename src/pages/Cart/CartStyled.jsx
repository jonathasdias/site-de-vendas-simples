import styled from "styled-components";

export const Wapper = styled.section`
    display: flex;
    justify-content: space-between;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`

export const SectionPayment = styled.section`
    padding: 10px;
    background-color: rgb(247, 244, 244);
    border-radius: 2rem;
    margin: 2rem 1rem;
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
    }

    @media (max-width: 760px) {
        width: 100%;
        margin: 0;
        border-radius: 0;
    }
`