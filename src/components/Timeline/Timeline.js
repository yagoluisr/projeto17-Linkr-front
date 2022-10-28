import { useState, useEffect, useContext, useCallback } from "react";
import { getPosts, getUserFollows } from "../../services/api";
import PostsBox from "./PostsBox";
import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import Title from "../../assets/styles/Title";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import FormBox from "./FormBox";
import Updater from "./Updater";
import { userContext, renderTimeLineContext } from "../../context/userContext";
import { SearchPeople } from "../Search/Search";
import { Mobile } from "../../pages/userPage/userPosts";

export default function Timeline() {
  const { user } = useContext(userContext);
  const { renderTimeline } = useContext(renderTimeLineContext);

  const [posts, setPosts] = useState([]);
  const [follows, setFollows] = useState(null);
  const [pages, setPages] = useState(1)

  const getDataFromAPI = useCallback(async()=>{
    try {
      const postsData = await getPosts(pages);
      setPosts(postsData.data);

      const followsData = await getUserFollows(user.id);
      setFollows(followsData.data);
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
      <MobileSearch>
        <SearchPeople />
      </MobileSearch>
      <Title>timeline</Title>
      <PublishBox>
        <ProfilePic src={user.image_url} />
        <FormBox updatePosts={setPosts} />
      </PublishBox>
      <Updater posts={posts} updatePosts={setPosts} />
      <Posts>
        {posts ? (
          <div>
            {follows?.length === 0 ? (
              <TimelineMessage>
                You don't follow anyone yet. Search for new Friends!
              </TimelineMessage>
            ) : (
              <PostsBox identifier={"timeline"} posts={posts} setPosts={setPosts} pages={pages} setPages={setPages} />
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
  overflow: auto;
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
    margin-top: 5px;
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
  overflow: auto;

  @media (max-width: 614px) {
    width: 100vw;
  }
`;

const MobileSearch = styled(Mobile)`
  display: none;
  
    @media (max-width: 614px) {
      display: block;
      width: 90%;

      margin: 0 auto 40px auto;

      div input {
        width: 80vw;
      }

  }
`
