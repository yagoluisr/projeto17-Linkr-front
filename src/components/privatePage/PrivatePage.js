import { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userContext } from '../../context/userContext';
import { getUser } from '../../services/api';
import { Header } from '../Header/Header';


export default function PrivatePage ({children}) {
    const auth = JSON.parse(localStorage.getItem("linkr"));
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserAPI() {
            try {
                const answer = (await getUser());
                setUser(answer.data);
                console.log(answer.data)

            } catch {
                navigate("/");
            }
        }

        if(auth && !user) {
            getUserAPI();
        }
    }, [auth, setUser, user]);

    if (!auth) {
        return <Navigate to="/" />
    }

    if (auth) {
        return (
            <Wrapper>
                { user ? (
                    <>
                        <Header />
                        <section>
                            {children}
                        </section>
                    </>
                ) : null}
            </ Wrapper>
        );
    }
}

const Wrapper = styled.main`
    & > section {
        margin-top: 72px;
    }
`