import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../Header/Header';


export default function PrivatePage ({children}) {
    const auth = JSON.parse(localStorage.getItem("linkr"));

    //if(!auth) return <Navigate to = '/' />

    return (
        <Wrapper>
            <Header />
            <section>
                {children}
            </section>
        </ Wrapper>
    );
}

const Wrapper = styled.main`
    & > section {
        margin-top: 72px;
    }
`