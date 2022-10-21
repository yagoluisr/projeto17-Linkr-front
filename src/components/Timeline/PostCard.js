import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";

export default function PostCard({image_url, username, description, link}) {
    return(
        <Wrapper>
            <ProfilePic 
                src={image_url}
            />
            <PostData>
                <h3>{username}</h3>
                <span>{description}</span>
                <h4>{link}</h4>
            </PostData>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: Lato, sans-serif;
    margin-bottom: 15px;
    display: flex;
    background-color: var(--post-background-black);
    height: fit-content;
    //width: 35vw;
    width:100%;
    //min-width: 600px;
    min-height: 220px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    img {
        margin-top: 16px;
        margin-left: 18px;
        background-color: red;
    }
`
const PostData = styled.div`
    margin-top: 20px;
    margin-left: 17px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: 180px;
    justify-content: space-between;
    h3 {
        color: var(--main-white);
        margin-top: 13px;
        font-size: 20px;
        font-weight: bold;
    }
    span {
        color: var(--font-gray);
        margin-bottom: 10px;
    }
    h4 {
        color: var(--main-white);
        font-weight: bold;
        background-color: blue;
        height: 100px;
        margin-right: 18px;
    }
`