import styled from "styled-components";
import Title from "../../assets/styles/Title";
import TextContainer from "./TrendingTxtContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { getTrendingHashtags } from "../../services/api.js";

export default function TrendingHashtags({refresh}) {
  const navigate = useNavigate();
  const [hashtags, SetHashtags] = useState([]);

  const getHashtags = useCallback(() => {
    getTrendingHashtags()
      .then((res) => {
        SetHashtags(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error in fetching your trending hashtags from API, please restart the app");
      });
  }, [refresh]);

  useEffect(getHashtags, [getHashtags]);

  function handleNavigate(event) {
    const hashtagName = event.target.innerText.replace("# ", "");
    navigate(`/hashtag/${hashtagName}`);
  }

  return (
    <>
      <Wrapper>
        <TextContainer>
          <Title>trending</Title>
        </TextContainer>
        <CrossLine></CrossLine>
        <TextContainer>
          {hashtags.map((hashtag) => (
            <span onClick={(e) => handleNavigate(e)}>
              # {hashtag.hashtagName}
            </span>
          ))}
        </TextContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--post-background-black);
  height: 400px;
  width: 300px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 170px;
  h2 {
    font-size: 27px;
  }
  @media (max-width: 614px) {
        display: none;
    }
`;

const CrossLine = styled.div`
  width: 100%;
  border: 1px solid #484848;
`;
