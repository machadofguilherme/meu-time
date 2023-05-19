import styled from "styled-components";

export const CountryContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.2rem;

    select {
        padding: 10px 15px;
        outline: none;
        background-color: #1E5128;
        color: #D8E9A8;
        font-weight: 500;
        border: none;
    }

    img {
        height: 180px;
        width: 180px;
        border-radius: 1.3rem;
    }

    button {
        margin-top: 1rem;
        width: 100%;
        height: 30px;
        cursor: pointer;
    }

    h3 {
        font-weight: 300;
    }
`