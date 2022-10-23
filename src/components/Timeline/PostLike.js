import { useEffect, useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";
import { deletePostLike, getPostLike, postPostLike } from "../../services/api";

export default function Like({ id }) {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getPostLike(id)
            .then((answer) => {
                setLike(answer.data.likedByUser);
                setLikeCount(answer.data.likes_number);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [refresh]);

    function likePost() {
        postPostLike(id)
            .then(() => {
                setRefresh(!refresh);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function dislikePost() {
        deletePostLike(id)
            .then(() => {
                setRefresh(!refresh);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Wrapper like={like}>
            {like ? <IoHeart onClick={dislikePost} /> : <IoHeartOutline onClick={likePost} />}
            <p>{likeCount} likes</p>
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