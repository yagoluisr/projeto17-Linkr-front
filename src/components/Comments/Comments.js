import styled from "styled-components";

import InputComent from "./InputComment";

export default function Comments({ id, comments_number }) {



    return (
        <Wrapper>

            <InputComent />
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