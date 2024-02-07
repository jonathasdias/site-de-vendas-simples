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
        color: ${({theme})=> theme.textColor};

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
            border: none;
            background-color: ${({theme})=> theme.black};
            color: ${({theme})=> theme.textColor};
            border-radius: 4px;
            box-shadow: 1px 1px 10px black;
            transition: all .5s;

            &:hover {
                transform: scale(1.02);
            }
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