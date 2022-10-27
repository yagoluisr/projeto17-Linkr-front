import Modal from "react-modal";
import { deletePost } from "../../services/api";
import { Watch } from "react-loader-spinner";
import styled from "styled-components";
import { useContext, useState } from "react";
import { renderTimeLineContext } from "../../context/userContext";

export default function DeleteModal({ isOpen, setOpen, setHidePopUp, postId }) {
  const [loading, setloading] = useState(false);
  const { renderTimeline, setRender } = useContext(renderTimeLineContext);

  function closeModal() {
    setOpen(false);
    setHidePopUp(true);
    setloading(false);
  }
  return (
    <ModalBox
      isOpen={isOpen}
      onRequestClose={closeModal}
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
            <Button onClick={() => closeModal()}>No, go back</Button>
            <Button
              color="#ffffff"
              onClick={() => {
                setloading(true);
                deletePost(postId)
                  .then((answer) => {
                    setRender(!renderTimeline);
                    closeModal();
                  })
                  .catch((error) => {
                    console.error(error);
                    setRender(!renderTimeline);
                    alert("Server couldn't delete the post, please try later");
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
