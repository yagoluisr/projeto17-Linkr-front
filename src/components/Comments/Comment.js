import styled from "styled-components";

export default function Comment({ id, user_id, name, image_url, comment, post_author_id, follow }) {
    return (
        <Wrapper>
            {comment}
        </Wrapper>    
    );

}

const Wrapper = styled.li`
    min-height: 70px;
    border-bottom: 1px solid #353535;
`;