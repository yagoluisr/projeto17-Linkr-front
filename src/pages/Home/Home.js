import styled from "styled-components";
import Timeline from "../../components/Timeline/Timeline";
import TrendingHashtags from "../../components/Trending/TrendingHashtags";
import { useState } from "react";

export default function Home() {
  //const [refresh, setRefresh] = useState(false);

  return (
    <Wrapper>
      {/* <Timeline refresh={refresh} setRefresh={setRefresh}/> */}
      {/* <TrendingHashtags refresh={refresh}/> */}
      <Timeline />
      <TrendingHashtags />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: fit-content;
  min-height: 130vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: var(--background-gray);
  display: flex;
  justify-content: center;
  column-gap: 80px;
`;
