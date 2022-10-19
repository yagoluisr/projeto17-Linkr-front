import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import { SignWrapper } from "../../assets/styles/SignWrapper";
import { signUp } from "../../services/api";
import AsideTitle from "./AsideTitle";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        username: '',
        url: ''
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        signUp(data)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    alert("This e-mail is already being used.");
                }
                console.log(error);
                setDisabled(false);
            });
    }

    return (
        <SignWrapper>
            <AsideTitle />
            
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="e-mail"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={data.username}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Input
                    type="url"
                    placeholder="picture url"
                    name="url"
                    value={data.url}
                    updateData={updateData}
                    disabled={disabled}
                />

                <Button>Sign Up</Button>
            </form>
        </SignWrapper>
    );
}
