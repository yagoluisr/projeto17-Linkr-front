import styled from "styled-components";

export const IconWrapper = styled.div`
    color: var(--main-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;

    & > svg {
        color: var(--main-white);
        font-size: 21px;
    }

    & > p {
        margin-top: 5px;
        font-size: 11px;
    }
`;