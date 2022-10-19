import styled from "styled-components";

export default function ProfilePic ({ src, alt }) {
    return (
        <Wrapper
        src= { src }  
        alt= { alt }
        />        
    );
}

const Wrapper = styled.img`
    border: none;
    object-fit: cover;
    height: 65px;
    width: 65px;
    border-radius: 50px;
 `