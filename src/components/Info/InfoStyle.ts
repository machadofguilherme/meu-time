import styled from "styled-components";

export const TeamContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;

    h3 {
        font-weight: 500;
        margin: 10px;
        color: #1E5128;
    }

    img {
        height: 80px;
        width: 80px;
    }
`

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
    margin: 0 auto;

    h3 {
        font-size: 1rem;
        margin: 10px;
    }
`