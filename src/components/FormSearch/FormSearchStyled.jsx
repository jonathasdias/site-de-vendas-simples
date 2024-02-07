import styled from "styled-components";

export const Form = styled.form`
    padding: 22px 10px;

    div {
        display: flex;
        justify-content: center;

        input {
            padding: 12px;
            border: none;
            border-radius: 1rem 0 0 1rem;
            width: 40rem;
            font-size: 1em;
            background-color: rgba(255, 255, 255, 0.699);
            border: 2px solid gray;
            box-shadow: inset 1px 1px 8px black;
            outline: none;

            &:focus {
                border-color: rgb(53, 53, 182);
            }
        }
        
        button {
            padding: 0 1.2rem;
            border: none;
            border-radius: 0 1rem 1rem 0;
            cursor: pointer;
            font-size: 1.4em;
            background-color: ${({theme})=> theme.black};
            color: ${({theme})=> theme.textColor};
            border: 2px solid gray;
            border-left: none;

            &:hover {
                background-color: #706f6fac;
            }
        }
    }
`