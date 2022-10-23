import styled from "styled-components";

export default function TextContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  span {
    line-height: 30px;
    font-size: 19px;
    color: var(--main-white);
    font-weight: 700;
    font-family: var(--main-font);
    cursor: pointer;
    :hover {
      font-size: 22px;
    }
  }
`;
