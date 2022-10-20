import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import ProfilePic from '../../assets/styles/ProfilePic';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

export function SearchPeople () {
    const arr = [
        {
            id:1,
            name: 'Rocket',
            url: "https://cdn.ome.lt/Lqdvo48Q-P232Yftee90aJPYKwo=/1200x630/smart/extras/conteudos/1_QLMBB49.jpg"
        },
        {
            id:2,
            name: 'Hulk',
            url: "https://lumiere-a.akamaihd.net/v1/images/aiw_galeria_hulk_1920x1080_37dbd2f4.jpeg?region=0,0,1920,1080&width=960"
        }
    ];

    const [search, setSearch] = useState('');

    useEffect(()=>{
        //requisição pro back
    },[search])


    return (
        <Wrapper>
            <Search>
                <div>
                    <DebounceInput 
                        type = 'text'
                        value = {search}
                        onChange = {(e) => setSearch(e.target.value)}
                        minLength = {3}
                        debounceTimeout = {300}
                        placeholder = "Search for people"
                    />
                    <div>
                        <IoIosSearch />
                    </div>
                </div>
                {
                    search ? 
                    <Extension>
                        {arr.map((user, key) => 
                            <Profile key={key}>
                                <ProfilePic src={user.url}></ProfilePic>
                                <p>{user.name}</p>
                            </Profile>
                        )}                        
                    </Extension>
                    :
                    ''
                }
                
            </Search>
        </ Wrapper>
    )   
}

const Search = styled.div`
    display: flex;
    flex-direction: column;
    
    div:first-child {
        height: 45px;
        
        border-radius: 8px;

        background-color: var(--main-white);
        
    }

    div input {
        height: 45px;
        width: 30vw;

        font-size: 19px;

        padding: 11px 15px;

        ::placeholder {
            color: var(--placeholder-font-gray);
            opacity: 1; 
        }

        border-radius: 8px;
    }

    div svg {
        color: var(--placeholder-font-gray);
    }
`

const Extension = styled.div`
    min-height: 100px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 15px 0;

    border-radius: 8px;

    background-color: #E7E7E7;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 15px;
    right: 0;
    left: 0;
`

const Profile = styled.ul`
    height: 40px;
    width: 95%;

    display: flex;
    align-items: center;

    margin: 15px;

    p {
        font-family: var(--main-font);
        font-weight: 400;
        font-size: 19px;
        line-height: 22px;

        margin-left: 15px;

        color: #515151;
    }
`