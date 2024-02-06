import styled from "styled-components";

export const SectionDetails = styled.section`
    height: 100vh;
    display: flex;
    justify-content: space-between;

    figure {
        width: 50%;
        height: 100%;
    }

    section {
        width: 50%;
        padding: 10px;

        p {
            margin: 20px 0;
        }

        button {
            font-size: 1.2em;
            display: grid;
            place-items: center;
            width: 8rem;
            height: 3rem;
            margin-top: 10px;
        }
    }

    @media (max-width: 760px) {
        flex-direction: column;
        
        figure {
            width: 100%;
        }

        section {
            width: 100%;
        }
    }

`