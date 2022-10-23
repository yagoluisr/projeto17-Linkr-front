import styled from "styled-components";
import Logo from "../../assets/styles/Logo";
import ProfilePic from "../../assets/styles/ProfilePic";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SearchPeople } from "../Search/Search";
import Logout from "./Logout";
import { useState, useRef, useContext } from "react";
import { userContext } from "../../context/userContext";

export function Header () {
    const { user } = useContext(userContext);
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    return (
        <Wrapper>
            <Logo />

            <SearchPeople />

            <div ref={menuRef} onClick={open ? () => {setOpen(false)} : () => {setOpen(true)}}>
                {open ? (
                    <IoIosArrowUp />
                ) : (
                    <IoIosArrowDown />
                )} 
                <ProfilePic src={user.image_url} />
                <Logout open={open} setOpen={setOpen} menuRef={menuRef} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 72px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 28px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: var(--background-black);

    div {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        cursor: pointer;
    }

    div img {
        height: 53px;
        width: 53px;
    }
    
    & > div > svg{
        font-size: 30px;
        color: var(--main-white);

        margin-right: 15px;
    }
`