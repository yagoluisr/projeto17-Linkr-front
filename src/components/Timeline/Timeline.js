import styled from "styled-components";
import ProfilePic from "../../assets/styles/ProfilePic";
import Title from "../../assets/styles/Title";
import FormBox from "./FormBox";


export default function Timeline() {


    return (
        <Wrapper>
            <Title>timeline</Title>
            <PublishBox>
                <ProfilePic 
                    src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3Sdhy2sa03U_yWepZmnI-lV_-BzCCMtIDL3-oNLoH2HDRqZphOv-hMh39_ZIr18ifMI&usqp=CAU"
                    alt= ""
                />
                <FormBox />
            </PublishBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: fit-content;
    width: 40vw;
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: 60px;
        width: 35vw;
        text-align: left;
    }
`

const PublishBox = styled.div`  
    margin-top: 30px;
    display: flex;
    background-color: var(--main-white);
    height: fit-content;
    width: 35vw;
    min-width: 600px;
    min-height: 210px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    img {
        margin-top: 16px;
        margin-left: 18px;
        background-color: red;
    }
`

