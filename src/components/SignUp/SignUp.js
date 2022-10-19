import { useState } from "react";
import styled from "styled-components";
import Input from "../../assets/styles/Input";
import Logo from "../../assets/styles/Logo";
import Title from "../../assets/styles/Title";

export default function SignUp() {
    const [data, setData] = useState({
        email: ''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Wrapper>
            <aside>
                <Logo />
                <Title>save, share and discover<br />the best links on the web</Title>
            </aside>
            <form>
                <Input
                    type="email"
                    placeholder="e-mail"
                    name="email"
                    value={data.name}
                    updateData={updateData}
                />
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    
    aside {
        background-color: var(--background-black);
        width: 63%;
        height: 100%;
        padding: 30vh 0 0 8vw;
    }

    aside h1 {
        font-size: 106px;
        margin-bottom: 5px;
    }

    aside h2 {
        font-size: 43px;
        line-height: 64px;
    }

    form {
        background-color: var(--background-gray);
        width: 37%;
        height: 100%;
        padding: 30vh 3.7%;
    }
`;