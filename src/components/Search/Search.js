import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

export function SearchPeople () {
    return (
        <Search>
                <input 
                    placeholder="Search for people"
                />
                <div>
                    <IoIosSearch />
                </div>
        </Search>
    )
}

const Search = styled.div`
    
    div {
        height: 45px;
        
        border-radius: 0 8px 8px 0;

        background-color: var(--main-white);
    }

    input {
        height: 45px;
        width: 30vw;

        font-size: 19px;

        padding: 11px 15px;

        ::placeholder {
            color: var(--placeholder-font-gray);
            opacity: 1; 
        }

        border-radius: 8px 0 0 8px;
    }

    div svg {
        color: var(--placeholder-font-gray);
    }
`

const Extension = styled.div`
    height: 50px;
    width: 100%;
`