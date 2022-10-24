import styled from "styled-components";
import Microlink from "@microlink/react";
import { useEffect, useRef, useContext, useState } from "react";
import ProfilePic from "../../assets/styles/ProfilePic";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

import DeleteModal from "./DeleteModal";
import PostEditField from "./PostEditField";
import Like from "./PostLike";
import { userContext } from "../../context/userContext";

export default function PostCard({
  id,
  user_id,
  image_url,
  username,
  userPostEmail,
  postDescription,
  link,
  // refresh,
  // setRefresh,
}) {
  const [hidePopUp, setHidePopUp] = useState(true);
  const [editPost, setEditPost] = useState(true);
  const [description, setDescription] = useState();
  const [value, setValue] = useState(postDescription);
  const { user } = useContext(userContext);
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef();
  function openModal() {
    setOpen(true);
  }
  function PopUpMenu() {
    return (
      <PopUpList>
        <li>
          <div
            className="edit-post"
            onClick={() => {
              setEditPost(false);
              setHidePopUp(true);
            }}
          >
            <AiOutlineEdit className="edit-post" />
            <p className="edit-post">Edit post</p>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              openModal();
              setHidePopUp(true);
            }}
          >
            <BsTrash />
            <p>Move to trash</p>
          </div>
        </li>
      </PopUpList>
    );
  }

  useEffect(() => {
    setValue(postDescription);
    if (!editPost) {
      inputRef.current.focus();
    }
  }, [editPost, postDescription]);

  return (
    <Wrapper>
      <section>
        <ProfilePic src={image_url} />
        <Like id={id} />
      </section>

      <PostData>
        <HeaderContainer>
          <Link to={`/user/${user_id}`}>
            <h3>{username}</h3>
          </Link>
          {userPostEmail === user.email ? (
            <PopUpContainer className="pop-up">
              <div
                className="react-icon"
                onClick={() => {
                  setHidePopUp(!hidePopUp);
                }}
              >
                <FiMoreVertical />
              </div>
              <DeleteModal
                isOpen={isOpen}
                setOpen={setOpen}
                setHidePopUp={setHidePopUp}
                // refresh={refresh}
                // setRefresh={setRefresh}
                postId={id}
              />
              <PopUpMenuContainer hidden={hidePopUp}>
                <PopUpMenu />
              </PopUpMenuContainer>
            </PopUpContainer>
          ) : (
            ""
          )}
        </HeaderContainer>
        <PostEditField
          id={id}
          inputRef={inputRef}
          postDescription={postDescription}
          // setRefresh={setRefresh}
          // refresh={refresh}
          setValue={setValue}
          value={value}
          editPost={editPost}
          setEditPost={setEditPost}
          description={description}
          setDescription={setDescription}
        />
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
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0 0 1.5vw;
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
    width: 30vw;
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
  padding-right: 20px;
`;
const PopUpContainer = styled.div`
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
  z-index: 1;
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
