import styled from "styled-components";
import Microlink from '@microlink/react'
import { useContext, useState } from "react";
import ProfilePic from "../../assets/styles/ProfilePic";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { deletePost } from "../../services/api";
import Modal from "react-modal";
import { Watch } from "react-loader-spinner";
import { userContext } from "../../context/userContext";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";


export default function PostCard({
  id,
  image_url,
  username,
  userPostEmail,
  description,
  link,
  setRefresh,
}) {
  const { user } = useContext(userContext);
  const [disable, setDisable] = useState(true);
  const [loading, setloading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const customStyles = {
    content: {},
  };
  const navigate = useNavigate();
  const tagStyle = {
    color: '#FFFFFF',
    fontWeight: 700,
    cursor: 'pointer'
  };
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
    setDisable(true);
    setloading(false);
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
          {userPostEmail === user.email ? (
            <PopUpContainer>
              <div className="react-icon" onClick={() => setDisable(!disable)}>
                <FiMoreVertical />
              </div>
              <PopUpMenuContainer hidden={disable}>
                <ModalBox
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  ariaHideApp={false}
                  contentLabel="401 Login Modal"
                >
                  <span>Are you sure you want to delete this post?</span>

                  <div>
                    {loading === true ? (
                      <SpinnerWrapper>
                        <Watch width="50px" height="50px" color="#1877f2" />
                      </SpinnerWrapper>
                    ) : (
                      <>
                        <Button onClick={() => closeModal()}>
                          No, go back
                        </Button>
                        <Button
                          color="#ffffff"
                          onClick={() => {
                            setloading(true);
                            deletePost(id)
                              .then(() => {
                                setRefresh(true);
                                closeModal();
                              })
                              .catch((error) => {
                                console.error(error);
                                alert(
                                  "Server couldn't delete the post, please try later"
                                );
                                closeModal();
                              });
                          }}
                        >
                          Yes, delete it
                        </Button>
                      </>
                    )}
                  </div>
                </ModalBox>
                <PopUpMenu />
              </PopUpMenuContainer>
            </PopUpContainer>
          ) : (
            ""
          )}
        </HeaderContainer>
        
        <div>
      <ReactTagify 
        tagStyle={tagStyle} 
        tagClicked={(tag)=>navigate(`/hashtag/${tag.replace('#',"")}`)}>
        <span>{description}</span>
      </ReactTagify>
    </div>

        <LinkCard 
            url={link} 
            fetch-data="true"
            size="normal"
            media="logo"
            direction="rtl" />
      </PostData>
    </Wrapper>
  );
}
const SpinnerWrapper = styled.div`
  svg {
    margin-left: 85px;
  }
`;
const ModalBox = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 160px;
  width: 400px;
  border-radius: 25px;
  background-color: #303030;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  span {
    width: 300px;
    color: white;
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }
  div {
    width: 230px;
    display: flex;
    justify-content: space-between;
  }
  svg {
  }
`;
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
    border: 1px solid #4D4D4D;
    border-radius: 9px;
    width: 30vw;
    --microlink-background-color: #151515;
    --microlink-color: #FFFFFF;
    --microlink-hover-background-color: none;
    --microlink-max-width: none;
    margin-right: 30px;
    margin-bottom: 20px;
    img{
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
const Button = styled.button`
  height: 30px;
  width: 100px;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  color: ${(props) => (props.color === "#ffffff" ? "#ffffff" : "#1877f2")};
  background-color: ${(props) =>
    props.color === "#ffffff" ? "#1877f2" : "#ffffff"};
  font-size: 14px;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
