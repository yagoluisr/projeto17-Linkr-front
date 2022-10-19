import styled from "styled-components";

export default function Title({ children }) {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
}

const Wrapper = styled.h2`
    font-family: var(--titles-font);
    color: var(--main-white);
    font-weight: 700;
`;