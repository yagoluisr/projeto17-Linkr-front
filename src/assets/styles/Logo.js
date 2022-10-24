import styled from "styled-components";

export default function Logo({onClick}) {
    return (
        <Wrapper onClick={onClick}>
            linkr
        </Wrapper>
    );
}

const Wrapper = styled.h1`
    font-family: var(--logo-font);
    color: var(--main-white);
    font-size: 49px;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 614px) {
        font-size: 45px;
    }
`;