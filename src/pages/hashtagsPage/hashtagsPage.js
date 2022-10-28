import { useState, useEffect } from "react";
import { getPostsbyHashtag } from "../../services/api";
import PostsBox from "../../components/Timeline/PostsBox";
import styled from "styled-components";
import Title from "../../assets/styles/Title";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import TrendingHashtags from "../../components/Trending/TrendingHashtags";
import { useParams } from "react-router-dom";

export default function HashtagsPage(){
    const [refresh, setRefresh] = useState(false);
    const [posts, setPosts] = useState(null);
    const [pages, setPages] = useState(1);
    const hashtag = useParams().hashtag;

    useEffect(() => {
        setRefresh(false);

        getPostsbyHashtag(hashtag, pages)
            .then((res) => {
                setPosts(res.data);
            }
        )
        .catch((error) => {
            console.error(error.message);
        });

    }, [hashtag, refresh]);

    return (
        <Wrapper>
            <Container>
                <Title># {hashtag}</Title>
                <Posts>
                    {posts ? (
                    <PostsBox
                        setRefresh={setRefresh}
                        posts={posts}
                        setPosts={setPosts}
                        setPages={setPages}
                        pages={pages}
                        identifier={"hashtag"}
                        hashtag={hashtag}
                    />
                    ) : (
                    <TimelineMessage />
                    )}
                </Posts>
            </Container>
            <TrendingHashtags refresh={refresh}/>
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

const Posts = styled.div`
  margin-top: 15px;
  height: fit-content;
  width: 40vw;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 614px) {
        width: 100vw;
    }
`;
