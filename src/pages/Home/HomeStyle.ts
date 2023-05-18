import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1, i {
        color: #1E5128;
    }

    i {
        font-size: 5rem;
        text-align: center;
        line-height: 0;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: .5rem;

    input, button {
        height: 40px;
        background-color: #191A19;
        color: #4E9F3D;
        padding-left: 1rem;
        border-radius: .5rem;
    }

    input::placeholder {
        color: #4E9F3D;
    }

    button {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 0;

        &:hover {
            cursor: pointer;
            background-color: #4E9F3D;
            color: #191A19;
            transition: all 500ms ease;
        }
    }
`