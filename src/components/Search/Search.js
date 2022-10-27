import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import ProfilePic from '../../assets/styles/ProfilePic';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { getByUserName } from '../../services/api';
import { Link } from 'react-router-dom';

export function SearchPeople () {
    const [search, setSearch] = useState('');
    const [arrUsers, setArrUsers] = useState([]);

    useEffect(()=>{
        getByUserName(search)
            .then(res => {
                setArrUsers(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
            
        if(search.length < 3) {
            setArrUsers([])
        }
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
                        <IoIosSearch />
                </div>
                {
                    arrUsers.length > 0 ? 
                    <Extension>
                        {arrUsers.map((user, key) => 
                            <Link to = {`/user/${user.id}`} 
                                key={key} 
                                onClick={()=> 
                                    setSearch('')}
                                >
                                <Profile>
                                    <ProfilePic src={user.image_url}></ProfilePic>
                                    <p>{user.name}</p>
                                    {user.follow ? (<Follow><p>• following</p></Follow>) : (<div></div>)}
                                </Profile>
                            </Link>
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

        padding: 11px 50px 11px 15px;

        ::placeholder {
            color: var(--placeholder-font-gray);
            opacity: 1; 
        }

        border-radius: 8px;
    }


    & > div {
        position: relative;
    }

    & > div > svg {
        font-size: 30px;

        position: absolute;
        top: 7px;
        right: 15px;

        color: var(--placeholder-font-gray);
    }
`

const Extension = styled.ul`
    min-height: fit-content;
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

const Profile = styled.li`
    height: 40px;
    //width: 95%;

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

const Follow = styled.div`
    height: 40px;
    display: flex;
    align-items: center;

    p {
        font-family: var(--main-font);
        font-weight: 400;
        font-size: 19px;
        line-height: 22px;
        margin-left: 15px;
        color: #C5C5C5;
    }

`