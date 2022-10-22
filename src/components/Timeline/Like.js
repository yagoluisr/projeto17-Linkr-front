import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Like() {
    const [like, setLike] = useState(false);

    return (
        <Wrapper like={like}>
            {like ? <IoHeart onClick={() => {setLike(false)} } /> : <IoHeartOutline onClick={() => {setLike(true)}} />}
            <p>{17} likes</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: var(--main-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    svg {
        color: ${props => props.like ? 'var(--like-red)' : 'var(--main-white)'};
        font-size: 25px;
        transition: color .4s linear;
        animation: liked .4s ease;
        cursor: pointer;
    }

    p {
        margin-top: 5px;
    }

    @keyframes liked {
        0% {
            transform: scale(.8);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;