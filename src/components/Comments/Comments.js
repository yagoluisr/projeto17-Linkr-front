import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostComments } from "../../services/api";
import Comment from "./Comment";

import InputComent from "./InputComment";

export default function Comments({ id, comments_number }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(id)
            .then((answer) => {
                setComments(answer.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setComments]);

    return (
        <Wrapper>
            <ul>
                {comments.map(comment => (
                    <Comment {...comment} />
                ))}
            </ul>
                
            <InputComent id={id} />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    font-family: var(--main-font);
    margin-bottom: 15px;
    margin-top: -30px;
    background-color: var(--background-comments-gray);
    width: 40vw;
    min-width: 25vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 16px 16px;
    padding: 25px;
`;