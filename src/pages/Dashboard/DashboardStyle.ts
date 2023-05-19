import styled from "styled-components";

export const DashboardContainer = styled.main`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SectionDashboard = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 10px;

    button {
        border-radius: .8rem;
        padding: 5px 15px;
        background-color: #1E5128;
        color: #D8E9A8;

        &:hover {
            background-color: #191A19;
            cursor: pointer;
            transition: all 500ms ease;
        }
    }
`