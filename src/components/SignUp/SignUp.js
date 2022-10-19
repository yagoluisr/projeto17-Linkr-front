import { useState } from "react";
import styled from "styled-components";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Logo from "../../assets/styles/Logo";
import Title from "../../assets/styles/Title";

export default function SignUp() {
    const [data, setData] = useState({
        email: '',
        password: '',
        username: '',
        url: ''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Wrapper>
            <aside>
                <Logo />
                <Title>save, share and discover<br />the best links on the web</Title>
            </aside>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="e-mail"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                />
                <Input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                />
                <Input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={data.username}
                    updateData={updateData}
                />
                <Input
                    type="url"
                    placeholder="picture url"
                    name="url"
                    value={data.url}
                    updateData={updateData}
                />

                <Button>Sign Up</Button>
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

    form input {
        margin-bottom: 13px;
    }

    form button {
        width: 100%;
        height: 65px;
        margin-bottom: 14px;
    }
`;