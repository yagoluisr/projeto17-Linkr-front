import styled from "styled-components";
import Microlink from "@microlink/react";
import { useState } from "react";
import ProfilePic from "../../assets/styles/ProfilePic";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import DeleteModal from "./DeleteModal";

export default function PostCard({
  id,
  image_url,
  username,
  userPostEmail,
  description,
  link,
  setRefresh,
  userEmail,
}) {
  const [disable, setDisable] = useState(true);
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function PopUpMenu() {
    return (
      <PopUpList>
        <li>
          <div>
            <AiOutlineEdit />
            <p>Edit post</p>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              openModal();
            }}
          >
            <BsTrash />
            <p>Move to trash</p>
          </div>
        </li>
      </PopUpList>
    );
  }

  return (
    <Wrapper>
      <ProfilePic src={image_url} />
      <PostData>
        <HeaderContainer>
          <h3>{username}</h3>
          {userPostEmail === userEmail ? (
            <PopUpContainer>
              <div className="react-icon" onClick={() => setDisable(!disable)}>
                <FiMoreVertical />
                <DeleteModal
                  isOpen={isOpen}
                  setOpen={setOpen}
                  setDisable={setDisable}
                  setRefresh={setRefresh}
                  postId={id}
                />
              </div>
              <PopUpMenuContainer hidden={disable}>
                <PopUpMenu />
              </PopUpMenuContainer>
            </PopUpContainer>
          ) : (
            ""
          )}
        </HeaderContainer>
        <span>{description}</span>

        <LinkCard
          url={link}
          fetch-data="true"
          size="normal"
          media="logo"
          direction="rtl"
        />
      </PostData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  font-family: Lato, sans-serif;
  margin-bottom: 15px;
  display: flex;
  background-color: var(--post-background-black);
  height: fit-content;
  width: 40vw;
  min-width: 25vw;
  min-height: 220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  img {
    margin-top: 16px;
    margin-left: 1.5vw;
  }

  @media (max-width: 614px) {
    width: 100vw;
    border-radius: 0;
    min-height: fit-content;
    img {
      margin-top: 22px;
      margin-left: 4vw;
    }
  }
`;
const PostData = styled.div`
  margin-top: 20px;
  margin-left: 1.5vw;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 180px;
  justify-content: space-between;
  h3 {
    color: var(--main-white);
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 400;
  }
  span {
    color: var(--font-gray);
    margin-bottom: 25px;
    margin-right: 5px;
  }

  @media (max-width: 614px) {
    margin-left: 3vw;
    img {
      margin-top: 16px;
    }
  }
`;
const LinkCard = styled(Microlink)`
  display: flex;
  border: 1px solid #4d4d4d;
  border-radius: 9px;
  width: 30vw;
  --microlink-background-color: #151515;
  --microlink-color: #ffffff;
  --microlink-hover-background-color: none;
  --microlink-max-width: none;
  margin-right: 30px;
  margin-bottom: 20px;
  img {
    border-radius: 0px 12px 13px 0px;
  }
  @media (max-width: 614px) {
    width: 76vw;
    img {
      margin-top: 16px;
    }
  }
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;
const PopUpContainer = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  .react-icon {
    display: flex;
    width: 30px;
    height: 30px;
    padding-left: 7px;
    flex-direction: flex-end;
    align-items: center;
    border-radius: 50%;
  }
  .react-icon:hover {
    background-color: #252525;
    cursor: pointer;
  }
`;
const PopUpMenuContainer = styled.div`
  position: absolute;
  width: 150px;
  top: 0;
  margin: 56px 6px 0px 0px;
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
