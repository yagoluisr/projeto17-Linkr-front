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

    @media (max-width: 614px) {
        flex-direction: column;

        form {
            width: 100%;
            height: calc(100vh - 175px);
            padding: 40px 6%;
            margin-top: -1px
        }
    }
`;