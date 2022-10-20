import styled from "styled-components"
import Timeline from "../Timeline/Timeline"

export default function Home(){
    return (
        <Wrapper>
            <Timeline/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: fit-content;
    min-height: 130vh;
    width: 100vw;
    background-color: var(--background-gray);
    display: flex;
    justify-content: center;
`
