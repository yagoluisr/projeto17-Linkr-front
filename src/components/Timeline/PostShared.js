import styled from "styled-components";
import { BiRepost } from "react-icons/bi";
import { Tooltip } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getSharedCountByPost } from "../../services/api";

export default function PostShared({ id }) {
  const [hidePopUp, setHidePopUp] = useState(true);
  const [sharedCount, setSharedCount] = useState(0);

  function RePostPopUp() {
    return (
      <PopUpList>
        <li>
          <div
            className="edit-post"
            onClick={() => {
              setHidePopUp(true);
            }}
          >
            <BiRepost />
            <p>Repost</p>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              //   openModal();
              setHidePopUp(true);
            }}
          >
            <AiOutlineEdit />
            <p>Comment Repost</p>
          </div>
        </li>
      </PopUpList>
    );
  }

  useEffect(() => {
    getSharedCountByPost(id).then((answer) => {
      setSharedCount(answer);
    }, []);
  });

  return (
    <Tooltip title={hidePopUp ? "Repost" : ""}>
      <Wrapper>
        <PopUpContainer className="pop-up">
          <RepostContainer className="react-icon">
            <BiRepost
              onClick={() => {
                setHidePopUp(!hidePopUp);
              }}
            />
            <p>`${sharedCount} reposts`</p>
          </RepostContainer>

          <PopUpMenuContainer hidden={hidePopUp}>
            <RePostPopUp hidden={hidePopUp} />
          </PopUpMenuContainer>
        </PopUpContainer>
      </Wrapper>
    </Tooltip>
  );
}

const Wrapper = styled.div`
  color: var(--main-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  svg {
    color: ${(props) => (props.like ? "var(--like-red)" : "var(--main-white)")};
    transition: color 0.4s linear;
    animation: liked 0.4s ease;
    cursor: pointer;
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
  svg {
    font-size: 28px;
  }
  svg:hover {
    background-color: #252525;
    cursor: pointer;
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
  left: -16%;
  margin: 188px 6px 0px 80px;
  svg {
    font-size: 20px;
  }
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
  p {
    font-size: 14px;
  }
`;
const RepostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
