import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userContext } from "../../context/userContext";
import { logout } from "../../services/api";

export default function Logout({ open, setOpen, menuRef }) {
    const navigate = useNavigate();
    const { setUser } = useContext(userContext);

    function handleClick() {
        logout()
            .then(() => {
                setUser(null);
                localStorage.removeItem("linkr");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        function handler(e) {
            if (!menuRef?.current.contains(e.target)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handler);
        }

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [open]);

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
    transition: all 0.1s ease-out;
    position: absolute;
    top: 70px;
    right: -45px;
    text-align: center;

    &:hover {
        cursor: ${props => props.open ? "pointer" : "initial"};
    }
`;