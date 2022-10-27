import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";

export default function Comment({ id, user_id, name, image_url, comment, post_author_id, follow }) {
    let text = "";

    if (user_id === post_author_id) text += " • post’s author";
    if (follow) text += " • following";


    return (
        <Wrapper>
            <ProfilePic src={image_url} />
            <div>
                <h4>{name}
                    <span>
                        {text}
                    </span>
                </h4>
                <p>{comment}</p>
            </div>
        </Wrapper>    
    );

}

const Wrapper = styled.li`
    min-height: 70px;
    border-bottom: 1px solid var(--comments-border);
    display: flex;
    align-items: center;
    padding: 15px 0;
    font-size: 14px;

    & > img {
        height: 40px;
        width: 40px;
        margin-right: 18px;
    }

    & > div > h4 {
        margin-bottom: 7px;
        color: var(--font-comments-white);
        font-weight: 700;
    }

    & > div > h4 > span {
        color: var(--font-comments-span);
        font-weight: 400;
    }

    & > div > p {
        color: var(--font-comments-gray);
        font-weight: 400;
        line-break: anywhere;
        line-height: 17px;
    }
`;