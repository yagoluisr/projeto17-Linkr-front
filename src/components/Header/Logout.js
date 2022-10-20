import styled from "styled-components";

export default function Logout({ open = false }) {
    function handleClick() {

    }

    return (
        <Wrapper
            open={open}
            onClick={open ? handleClick : null}
        >
            Logout
        </Wrapper>
    );
}

const Wrapper = styled.button`
    border: none;
    background-color: var(--background-black);
    color: var(--main-white);
    border-radius: 0 0 20px 20px;
    font-family: var(--main-font);
    font-size: 17px;
    font-weight: 700;
    width: 150px;
    height: 47px;
    max-height: ${props => props.open ? "100%" : "0"};
    overflow: hidden;
    transition: all 0.3s ease-out;
    position: absolute;
    top: 70px;
    right: -45px;
    text-align: center;

    &:hover {
        cursor: ${props => props.open ? "pointer" : "initial"};
    }
`;