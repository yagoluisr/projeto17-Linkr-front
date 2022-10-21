import { useState, useEffect } from "react";
import { getUser, getPosts } from "../../services/api";
import PostsBox from "./PostsBox"
import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import Title from "../../assets/styles/Title";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import FormBox from "./FormBox";


export default function Timeline() {

    const [userImage, setUserImage] = useState()
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const promise = getUser()
            promise.then((user) => {
                setUserImage(user.data.image_url);
            })
            promise.catch((error) => {
                console.log(error);
            })
        const request = getPosts()
            request.then((posts) => {
                setPosts(posts.data)
            })
            request.catch((error) => {
                console.log(error);
                alert('There have been an issue fetching your timeline, please refresh the page');
            })
    }, [])

    return (
        <Wrapper>
            <Title>timeline</Title>
            <PublishBox>
                <ProfilePic 
                    src={userImage}
                />
                <FormBox updatePosts={setPosts}/>
            </PublishBox>
            <Posts>
                {posts ? <PostsBox posts={posts}/> : <TimelineMessage>Loading...</TimelineMessage>}
            </Posts>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: fit-content;
    width: 40vw;
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    >h2 {
        font-size: 60px;
        text-align: left;
    }
`

const PublishBox = styled.div`  
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    background-color: var(--main-white);
    height: fit-content;
    width: 100%;
    //width: 35vw;
    //min-width: 600px;
    min-height: fit-content;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    img {
        margin-top: 16px;
        margin-left: 18px;
        background-color: red;
    }
`

const Posts = styled.div`
    margin-top: 15px;
    height: fit-content;
    width: 100%;
    //width: 35vw;
    //min-width: 600px;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`


