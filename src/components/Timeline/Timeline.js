import { useState, useEffect, useContext, useCallback } from "react";
import { getPosts, getUserFollows } from "../../services/api";
import PostsBox from "./PostsBox";
import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import Title from "../../assets/styles/Title";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import FormBox from "./FormBox";
import { userContext, renderTimeLineContext } from "../../context/userContext";

export default function Timeline() {
  const { user } = useContext(userContext);
  const { renderTimeline } = useContext(renderTimeLineContext);

  const [posts, setPosts] = useState(null);
  const [follows, setFollows] = useState(null);
  
  const getDataFromAPI = useCallback(async()=>{
    try {
      const postsData = await getPosts();
      setPosts(postsData.data);
      console.log(postsData.data);

      const followsData = await getUserFollows(user.id);
      setFollows(followsData.data);
      console.log(followsData.data);
    } catch (error) {
      console.error(error.message);
      alert(
        "There have been an issue loading your timeline, please refresh the page"
      );
    }
  },[user.id])

  useEffect( ()=>{getDataFromAPI()}, [getDataFromAPI, renderTimeline]);

  return (
    <Wrapper>
      <Title>timeline</Title>
      <PublishBox>
        <ProfilePic src={user.image_url} />
        <FormBox updatePosts={setPosts} />
      </PublishBox>
      <Posts>
        {posts ? (
          <div>
            {follows?.length === 0 ? (
              <TimelineMessage>
                You don't follow anyone yet. Search for new Friends!
              </TimelineMessage>
            ) : (
              <PostsBox posts={posts} />
            )}
          </div>
        ) : (
          <TimelineMessage>Loading...</TimelineMessage>
        )}
      </Posts>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: fit-content;
  margin-top: 50px;
  width: 40vw;
  background-color: var(--background-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h2 {
    font-size: 60px;
    text-align: left;
  }

  @media (max-width: 614px) {
    width: 100vw;
    margin-top: 30px;
    h2 {
      font-size: 40px;
      margin-left: 10px;
    }
  }
`;

const PublishBox = styled.div`
  margin-top: 60px;
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--main-white);
  height: fit-content;
  width: 40vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  img {
    margin-top: 20px;
    margin-left: 1.5vw;
  }

  @media (max-width: 614px) {
    width: 100vw;
    margin-top: 35px;
    border-radius: 0px;
    img {
      display: none;
    }
  }
`;

const Posts = styled.div`
  margin-top: 15px;
  height: fit-content;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 614px) {
    width: 100vw;
  }
`;
