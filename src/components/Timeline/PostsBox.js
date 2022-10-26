import styled from "styled-components";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import PostCard from "./PostCard";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { getPosts, getPostsbyHashtag } from "../../services/api";
import { Watch } from "react-loader-spinner";

export default function PostsBox({ identifier, hashtag, posts, pages, setPages, setPosts }) {

  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  async function loadMoreFunc(){
    if(posts.length && identifier !== 'user') {
      setLoading(true)
    }
    if(identifier === 'timeline'){
      const request = await getPosts(pages+1);
      setPosts(request.data);
      if(pages*10 > request.data.length){
        setHasMore(false)
      }
    ;
    }
    if(identifier === 'hashtag'){
      const request = await getPostsbyHashtag(hashtag, pages+1);
      setPosts(request.data);
      if(pages*10 > request.data.length){
        setHasMore(false)
      }
    ;
    }
    setPages(pages+1);
    setLoading(false)
  }

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreFunc}
        hasMore={hasMore}
      >
        {posts.length > 0 ? (
          posts.map((post, id) => {
            return (
              <PostCard
                key={id}
                id={post.id}
                user_id={post.user_id}
                username={post.name}
                image_url={post.image_url}
                userPostEmail={post.email}
                postDescription={post.description}
                link={post.link}
              />
            );
          })
        ) : (
          <TimelineMessage>{posts ? 'Loading...' : 'There are no posts yet'}</TimelineMessage>
        )}
      </InfiniteScroll>


      <LoadingMessage prop={loading}>
          <SpinnerWrapper>
            <Watch width="50px" height="50px" color="#ffffff" />
          </SpinnerWrapper>
        <TimelineMessage>
            Loading more posts...
        </TimelineMessage>
      </LoadingMessage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const LoadingMessage = styled.div`
    margin: 80px 0;
    display: ${props => props.prop ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const SpinnerWrapper = styled.div`
margin-bottom: 15px;
`;