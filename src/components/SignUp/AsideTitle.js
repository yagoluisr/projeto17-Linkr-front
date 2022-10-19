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

    @media (max-width: 614px) {
        width: 100%;
        height: 175px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & h1 {
            font-size: 76px;
            margin-bottom: 0;
        }

        & h2 {
            font-size: 23px;
            line-height: 34px;
        }
    }
`;