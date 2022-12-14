import styled from "styled-components";
import { BiRepost } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { useContext, useEffect, useState, useRef } from "react";
import { getSharedCountByPost, postSharePost } from "../../services/api";
import { renderTimeLineContext } from "../../context/userContext";
import { IconWrapper } from "../../assets/styles/IconWrapper";

export default function PostShared({ id, originalPost, repostedBy }) {
  const [hidePopUp, setHidePopUp] = useState(true);
  const [sharedCount, setSharedCount] = useState(null);
  const popUpRef = useRef();
  const { setRender } = useContext(renderTimeLineContext);
  useEffect(() => {
    getSharedCountByPost(originalPost ?? id)
      .then((answer) => {
        setSharedCount(answer.data.shares_number);
      })
      .catch((error) => console.log(error));

    function handler(e) {
      if (!popUpRef?.current.contains(e.target)) {
        setHidePopUp(!hidePopUp);
      }
    }

    if (!hidePopUp) {
      document.addEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [originalPost, id, hidePopUp, popUpRef]);

  function RePostPopUp() {
    return (
      <PopUpList ref={popUpRef}>
        <li>
          <div
            className="edit-post"
            onClick={() => {
              postSharePost(id)
                .then(() => setRender(true))
                .catch((error) => console.log(error));
              setHidePopUp(!hidePopUp);
            }}
          >
            <BiRepost />
            <p>Repost</p>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setHidePopUp(!hidePopUp);
            }}
          >
            <AiOutlineEdit />
            <p>Comment Repost</p>
          </div>
        </li>
      </PopUpList>
    );
  }

  return (
    <Wrapper>
      <PopUpContainer className="pop-up">
        <RepostContainer className="react-icon">
          <BiRepost
            onClick={() => {
              if (!repostedBy) {
                setHidePopUp(!hidePopUp);
              }
            }}
          />
          <p>{sharedCount ?? 0} reposts</p>
        </RepostContainer>

        <PopUpMenuContainer hidden={hidePopUp}>
          <RePostPopUp hidden={hidePopUp} />
        </PopUpMenuContainer>
      </PopUpContainer>
    </Wrapper>
  );
}

const Wrapper = styled(IconWrapper)`
  svg {
    transition: color 0.4s linear;
    animation: liked 0.4s ease;
  }
`;

const PopUpContainer = styled.div`
  height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  p {
    font-size: 14px;
  }
  .react-icon {
    font-size: 24px;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }
`;
const PopUpMenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 155px;
  top: 0;
  left: 0;
  margin: 250px 6px 0px 20px;
  p {
    padding-top: 2px;
  }
`;
const PopUpList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  row-gap: 10px;
  z-index: 1;
  padding: 8px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  text-align: center;
  background: #202020;
  div {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
  div:hover {
    background-color: #252525;
    cursor: pointer;
  }
  li:first-child {
    padding-bottom: 8px;
    border-bottom: 1px solid grey;
  }
`;
const RepostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 11px;
  }
`;
