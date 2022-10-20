import styled from "styled-components";

export default function Button ({ children, handleClick = null, disabled = false}) {
    return (
        <Wrapper
            onClick={handleClick}
            disabled={disabled}
        >
            { children }
        </Wrapper>    
    );
}

const Wrapper = styled.button`
    background-color: var(--accent-color);
    border: none;
    border-radius: 6px;
    color: var(--main-white);
    font-size: 27px;
    font-weight: 700;
    font-family: var(--titles-font);

    &:active {
        font-size: calc(27px / 0.97);
        transform: scale(0.97);
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
`;