import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IconWrapper } from "../../assets/styles/IconWrapper";

export default function CommentsCounter({ comments_number = 0, openComments, setOpenComments }) {
    return (
        <IconWrapper onClick={() => setOpenComments(!openComments)}>
            <IoChatbubbleEllipsesOutline />
            <p>{comments_number} comments</p>
        </IconWrapper>
    );
}