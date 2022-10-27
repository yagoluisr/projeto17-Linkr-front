import styled from "styled-components";
import { BiRepost } from "react-icons/bi";
export default function RepostSnackBar() {
  return (
    <RepostSnackbar>
      <BiRepost />
      <p>Reposted by </p>
    </RepostSnackbar>
  );
}

const RepostSnackbar = styled.div`
  position: absolute;
  top: -10.5%;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  padding-left: 25px;
  margin-bottom: 20px;
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
  p{
    font-size: 14px;
    color: white;
  }
`;
