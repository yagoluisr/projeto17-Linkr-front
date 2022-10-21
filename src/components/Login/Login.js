import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import { SignWrapper } from "../../assets/styles/SignWrapper";
import { login } from "../../services/api";
import AsideTitle from "../SignUp/AsideTitle";

export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function updateData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    login(data)
      .then((answer) => {
        const infoJSON = JSON.stringify({ token: answer.data.token });
        localStorage.setItem("linkr", infoJSON);
        navigate("/timeline");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("E-mail or password invalid.");
        }
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

        <Button disabled={disabled}>Log In</Button>

        <p
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          First time? Create an account!
        </p>
      </form>
    </SignWrapper>
  );
}
