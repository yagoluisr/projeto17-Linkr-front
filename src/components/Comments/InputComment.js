import { useContext, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import UnrequiredInput from "../../assets/styles/UnrequiredInput";
import { userContext } from "../../context/userContext";
import { postComment } from "../../services/api";

export default function InputComent({ id, setRefresh, refresh }) {
    const { user } = useContext(userContext);
    const [data, setData] = useState({
        comment: ""
    });
    
    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit() {
        if (data.comment.length === 0) return;

        postComment(id, data)
            .then(() => {
                setRefresh(!refresh);
                setData({
                    comment: ""
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Your message was not sent. Please try again later");
            });
    }

    return (
        <Wrapper>
            <ProfilePic src={user.image_url} />
            <UnrequiredInput
                type="text"
                placeholder="write a comment..."
                name="comment"
                value={data.comment}
                autoComplete="off"
                updateData={updateData}
            />
            <IoPaperPlaneOutline onClick={handleSubmit} />
        </Wrapper>
    );
}

const Wrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;


    & > img {
        width: 40px;
        height: 40px;
    }

    & > input {
        background-color: var(--background-comments-input);
        border-radius: 8px;
        color: var(--font-comments-white);
        font-family: var(--main-font);
        font-weight: 400;
        font-size: 14px;
        padding: 11px 45px 11px 15px;
        width: 100%;
        height: 40px;
        margin-left: 14px;
    }

    & > input::placeholder {
        color: var(--font-comments-input);
    }

    & > svg {
        position: absolute;
        top: 14px;
        right: 18px;
        color: var(--font-comments-white);
        font-size: 16px;
        cursor: pointer;
    }
`;