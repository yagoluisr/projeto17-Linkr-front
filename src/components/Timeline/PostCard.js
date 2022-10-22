import styled from "styled-components";
import Microlink from "@microlink/react";
import { useEffect, useRef, useState } from "react";
import ProfilePic from "../../assets/styles/ProfilePic";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import DeleteModal from "./DeleteModal";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import { updatePost } from "../../services/api";

const useStyles = makeStyles({
  input: {
    "& .MuiInputBase-root": {
      color: "#B7B7B7",
    },
    "& .MuiInputBase-root.Mui-focused": {
      backgroundColor: "#EFEFEF",
      color: "#9F9F9F",
    },
  },
});

export default function PostCard({
  id,
  image_url,
  username,
  userPostEmail,
  postDescription,
  link,
  setRefresh,
  userEmail,
}) {
  const [hidePopUp, setHidePopUp] = useState(true);
  const [editPost, setEditPost] = useState(true);
  const [defaultValue, setDefaultValue] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
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
  function handleOnChange(event) {
    setDescription(event.target.value);
  }

  useEffect(() => {
    setValue(postDescription);
    setDefaultValue(postDescription);
    if (!editPost) {
      inputRef.current.focus();
    }
  }, [editPost, postDescription]);

  document.querySelector("html").onclick = function (e) {
    if (e.target.className === document.querySelector(".jAnEYi").className) {
      setEditPost(true);
    }
  };
  return (
    <Wrapper>
      <ProfilePic src={image_url} />
      <PostData>
        <HeaderContainer>
          <h3>{username}</h3>
          {userPostEmail === userEmail ? (
            <PopUpContainer
              className="pop-up"
              onClick={() => {
                setHidePopUp(!hidePopUp);
              }}
            >
              <div className="react-icon">
                <FiMoreVertical />
                <DeleteModal
                  isOpen={isOpen}
                  setOpen={setOpen}
                  setHidePopUp={setHidePopUp}
                  setRefresh={setRefresh}
                  postId={id}
                />
              </div>
              <PopUpMenuContainer hidden={hidePopUp}>
                <PopUpMenu />
              </PopUpMenuContainer>
            </PopUpContainer>
          ) : (
            ""
          )}
        </HeaderContainer>
        <PostTextField
          id="outlined-multiline-flexible"
          maxRows={4}
          inputRef={inputRef}
          className={classes.input}
          placeholder={value}
          defaultValue={value}
          onChange={handleOnChange}
          variant="outlined"
          autoComplete="off"
          disabled={editPost}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              const body = { description };
              updatePost({ id, body })
                .then(() => {
                  setRefresh(true);
                  setEditPost(true);
                })
                .catch((error) => {
                  alert(
                    "There was an error trying to update the your post, please try again"
                  );
                });
              ev.preventDefault();
            }
          }}
          multiline
        />
        <LinkCard
          url={link}
          fetch-data="true"
          size="normal"
          media="logo"
          value={"red"}
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
  input {
    color: var(--font-gray);
    margin: 0 15px 25px 0;
    font-size: 15px;
    background-color: #151515;
  }
  input::placeholder {
    color: var(--font-gray);
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
  margin: 20px 30px 20px 0;
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
  height: 33px;
  margin-right: 20px;
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
const PostTextField = styled(TextField)`
  width: 91%;
`;
