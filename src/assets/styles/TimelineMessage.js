import styled from "styled-components";

export default function TimelineMessage({ children }) {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
}

const Wrapper = styled.span`
    margin-top: 70px;
    font-family: var(--main-font);
    color: var(--main-white);
    font-weight: 200;
    font-size: 28px;
`;