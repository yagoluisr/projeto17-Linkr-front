import styled from "styled-components";

export const SignWrapper = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;

    form {
        background-color: var(--background-gray);
        width: 37%;
        height: 100%;
        padding: 30vh 3.7%;
    }

    form input {
        margin-bottom: 13px;
    }

    form button {
        width: 100%;
        height: 65px;
        margin-bottom: 14px;
    }
`;