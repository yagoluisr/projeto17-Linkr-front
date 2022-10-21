import { useState } from "react";
import { makePost, getPosts } from "../../services/api";
import styled from "styled-components";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import UnrequiredInput from "../../assets/styles/UnrequiredInput";

export default function FormBox({ updatePosts }) {
  const [disable, setDisable] = useState(false);
  const [post, setPost] = useState({
    link: "",
    description: "",
  });

  function updatePost(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setDisable(!disable);
    const body = { ...post };
    try {
      await makePost(body);
      setPost({
        link: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("There have been an issue publishing your link");
    }
    try {
      const promise = await getPosts();
      updatePosts(promise.data);
    } catch (error) {
      console.error(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
    setDisable(false);
  }
  return (
    <Wrapper>
      <h3>What are you going to share today?</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="url"
          placeholder="https://..."
          name="link"
          value={post.link}
          updateData={updatePost}
          disabled={disable ? true : false}
        />
        <UnrequiredInput
          type="text"
          placeholder="Description"
          name="description"
          value={post.description}
          updateData={updatePost}
          disabled={disable ? true : false}
        />

        <Button type="submit" disabled={disable ? true : false}>
          {disable ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-left: 18px;
  height: fit-content;
  width: 100%;
  h3 {
    font-family: var(--main-font);
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 15px;
  }
  input {
    font-size: 24px;
    font-family: var(--main-font);
    background-color: var(--secondary-white);
    width: 96%;
    margin-bottom: 5px;
  }
  button {
    width: 180px;
    height: 55px;
    font-family: var(--main-font);
    margin-top: 10px;
    margin-bottom: 18px;
    font-weight: 700;
    font-size: 22px;
  }
`;
