import styled from "styled-components";
import Logo from "../../assets/styles/Logo";
import Title from "../../assets/styles/Title";

export default function AsideTitle() {
    return (
        <Wrapper>
            <Logo />
            <Title>save, share and discover<br />the best links on the web</Title>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    background-color: var(--background-black);
    width: 63%;
    height: 100%;
    padding: 30vh 0 0 8vw;

    & h1 {
        font-size: 106px;
        margin-bottom: 5px;
    }

    & h2 {
        font-size: 43px;
        line-height: 64px;
    }
`;