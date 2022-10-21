import styled from "styled-components";
import Logo from "../../assets/styles/Logo";
import ProfilePic from "../../assets/styles/ProfilePic";
import { IoIosArrowDown } from 'react-icons/io';
import { SearchPeople } from "../Search/Search";

export function Header () {
    return (
        <Wrapper>
            <Logo />

            <SearchPeople />

            <div>
                <IoIosArrowDown />  
                <ProfilePic src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2017/06/legiao_nfoMvIZzlwUOC9ESNXdPT4ReLDqpyc15hsV0bmA8Br.png.jpeg"/>
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

    background-color: var(--background-black);

    div {
        display: flex;
        align-items: center;
    }

    div img {
        height: 53px;
        width: 53px;
    }
    
    div svg{
        font-size: 30px;
        color: var(--main-white);

        margin-right: 15px;
    }
`