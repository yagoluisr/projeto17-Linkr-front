import { useState, useEffect } from "react";
import { getUserById } from "../../services/api";
import PostsBox from "../Timeline/PostsBox";
import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import Title from "../../assets/styles/Title";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import TrendingHashtags from "../Trending/TrendingHashtags";
import { useParams } from "react-router-dom";

export default function UserPage(){
    const [refresh, setRefresh] = useState(false);
    const [posts, setPosts] = useState(null);

    const [user, setUser] = useState([]);
    const userId = useParams().id;

    useEffect(() => {
        setRefresh(false);

        getUserById(parseInt(userId))
            .then((user) => {
                setUser(user.data)
                setPosts(user.data.posts);
            }
        )
        .catch((error) => {
            console.log(error);
        });

    }, [refresh]);

    return (
        <Wrapper>
            <Container>
                <Title>{user.name}'s posts</Title>
                {/* <ProfilePic src={userImage} /> */}
                <Posts>
                    {posts ? (
                    <PostsBox
                        setRefresh={setRefresh}
                        userEmail={user.email}
                        posts={posts}
                    />
                    ) : (
                    <TimelineMessage>Loading...</TimelineMessage>
                    )}
                </Posts>
            </Container>
            <TrendingHashtags />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: fit-content;
    min-height: 130vh;
    width: 100vw;
    background-color: var(--background-gray);
    display: flex;
    justify-content: center;
    column-gap: 80px;
`

const Container = styled.div`
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
        h2{
          font-size: 40px;
          margin-left: 10px;
        }
    }
`;

const PublishBox = styled.div`  
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-white);
    height: fit-content;
    width: 40vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    img {
        display: none;
    }

    @media (max-width: 614px) {
      width: 100vw;
      margin-top: 35px;
      border-radius: 0px;
    }
`

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
