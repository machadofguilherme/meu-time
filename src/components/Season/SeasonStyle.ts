import styled from "styled-components";

export const SeasonContainer = styled.main`
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

    button {
        margin-top: 1rem;
        width: 100%;
        height: 30px;
        cursor: pointer;
        background-color: #1E5128;
        color: #D8E9A8;

        &:hover {
            background-color: #191A19;
            transition: all 500ms ease;
        }

        &:disabled {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
            cursor: no-drop
        }
    }

    h3 {
        font-weight: 300;
    }
`