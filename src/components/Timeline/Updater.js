import styled from "styled-components";
import { getPosts } from "../../services/api";
import { useState } from "react";
import useInterval from "use-interval";
import {TfiReload} from 'react-icons/tfi'

export default function Updater({posts, updatePosts}) {
    const [newPostsCount, setNewPostsCount] = useState(0)

    useInterval(() => {
        let newPosts
        const promise = getPosts(1)
        promise.then(result => {
            newPosts = result.data;
            if (posts.length > 0) {
                const difference = newPosts[0].id - posts[0].id;
                setNewPostsCount(difference)
            }
        })
      }, 7500);

      async function handleClick(){
        try {
            const promise = await getPosts(1)
            updatePosts(promise.data)
            setNewPostsCount(0)
        } catch (error) {
            console.log(error);
            alert(
                "An error occured while trying to fetch the posts, please refresh the page"
              )
        }

      }

    return (
        <Wrapper hidden={newPostsCount === 0} onClick={()=> handleClick()}>
            <span>{newPostsCount} new posts, load more!</span> <TfiReload />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 40vw;
    height: fit-content;
    max-height: 90px;
    display: ${(props) => (props.hidden ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    background-color: var(--accent-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    cursor: pointer;

    &:active {
        font-size: calc(27px / 0.97);
        transform: scale(0.97);
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
    span{
        color: var(--main-white);
        font-size: 19px;
        margin: 15px 0;
    }
    svg {
        color: var(--main-white);
        font-size: 20px;
        margin-left: 15px;
        }

    @media (max-width: 614px) {
      width: 100vw;
      border-radius: 0px;
    }
`