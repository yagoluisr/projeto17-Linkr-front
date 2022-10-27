import styled from "styled-components";

export default function TimelineMessage({ children }) {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
}

const Wrapper = styled.span`
    text-align: center;
    margin-top: 70px;
    margin-bottom: 80px;
    font-family: var(--main-font);
    color: var(--main-white);
    font-weight: 200;
    font-size: 28px;
`;