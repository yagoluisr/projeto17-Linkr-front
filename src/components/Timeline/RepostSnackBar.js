import styled from "styled-components";
import { BiRepost } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/userContext";
import { getUserById } from "../../services/api";
export default function RepostSnackBar({ id, repostedBy }) {
  const [hideSnackbar, setHideSnackbar] = useState(true);
  const [userWhoRepost, setUserWhoRepost] = useState("");
  const { user } = useContext(userContext);

  useEffect(() => {
    if (repostedBy) {
      if (user.id === repostedBy) {
        setUserWhoRepost("you");
      } else {
        getUserById(repostedBy)
        .then((answer) => {
            setUserWhoRepost(answer.data.name);
          })
          .catch((error) => console.log(error));
      }
      setHideSnackbar(false);
    }
  }, [repostedBy, user.id]);
  return (
    <RepostSnackbar hidden={hideSnackbar}>
      <BiRepost />
      <p>Reposted by {userWhoRepost}</p>
    </RepostSnackbar>
  );
}

const RepostSnackbar = styled.div`
  top: -10.5%;
  left: 0;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  padding-left: 25px;
  font-family: var(--main-font);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 35px;
  background-color: #1e1e1e;
  svg {
    color: var(--main-white);
    font-size: 24px;
    margin-right: 20px;
  }
  p {
    font-size: 14px;
    color: white;
  }
`;
