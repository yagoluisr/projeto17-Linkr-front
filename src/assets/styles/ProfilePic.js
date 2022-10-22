import styled from "styled-components";

export default function ProfilePic ({src}) {
    return (
        <Wrapper
        src={src}
        />        
    );
}

const Wrapper = styled.img`
    border: none;
    object-fit: cover;
    height: 4.5vw;
    width: 4.5vw;
    min-height: 42px;
    min-width: 42px;
    max-height: 65px;
    max-width: 65px;
    border-radius:50px;
    @media (max-width: 614px) {
        height: 40px;
        width: 40px;
        border-radius:27px;
    }
 `