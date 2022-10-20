import styled from "styled-components";

export default function ProfilePic ({src}) {
    return (
        <Wrapper
        src= {src}
        />        
    );
}

const Wrapper = styled.img`
    border: none;
    object-fit: cover;
    height: 65px;
    width: 65px;
    border-radius:50px;
 `