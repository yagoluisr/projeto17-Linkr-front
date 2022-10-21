import styled from "styled-components";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import PostCard from "./PostCard";

export default function PostsBox({ setRefresh, posts, userEmail }) {
  return (
    <Wrapper>
      {posts.length > 0 ? (
        posts.map((post, id) => {
          return (
            <PostCard
              key={id}
              id={post.id}
              image_url={post.image_url}
              userPostEmail={post.email}
              username={post.name}
              description={post.description}
              link={post.link}
              setRefresh={setRefresh}
              userEmail={userEmail}
            />
          );
        })
      ) : (
        <TimelineMessage>There are no posts yet</TimelineMessage>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
