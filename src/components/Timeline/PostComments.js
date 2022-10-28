import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IconWrapper } from "../../assets/styles/IconWrapper";

export default function CommentsCounter({
  comments_number,
  openComments,
  setOpenComments,
  repostedBy,
}) {
  return (
    <IconWrapper
      onClick={() => {
        if (!repostedBy) {
          setOpenComments(!openComments);
        }
      }}
    >
      <IoChatbubbleEllipsesOutline />
      <p>{comments_number} comments</p>
    </IconWrapper>
  );
}
