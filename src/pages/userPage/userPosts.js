import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { deleteFollow, getFollowById, getUserById, insertFollow } from "../../services/api";
import PostsBox from "../../components/Timeline/PostsBox";
import ProfilePic from "../../assets/styles/ProfilePic";
import TimelineMessage from "../../assets/styles/TimelineMessage";
import TrendingHashtags from "../../components/Trending/TrendingHashtags";
import { userContext } from "../../context/userContext";
import { Search, SearchPeople } from "../../components/Search/Search";

export default function UserPage(){
    const { user } = useContext(userContext);

    const [refresh, setRefresh] = useState(false);
    const [posts, setPosts] = useState(null);

    const [profile, setProfile] = useState([]);
    const userId = Number(useParams().id);
    const [follow, setFollow] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setRefresh(false);

        getUserById(parseInt(userId))
            .then((profile) => {
                setProfile(profile.data)
                setPosts(profile.data.posts);
                
                getFollowById(profile.data.id)
                    .then(res => {
                        setFollow(res.data);
                    }
                )
                .catch((error) => {
                    console.error(error);
                });
            }
        )
        .catch((error) => {
            console.log(error);
        });
    }, [refresh, userId, follow]);


    function handleFollowButton () {
        setDisabled(true)

        if(follow[0]) {
            deleteFollow(profile.id)
                .then(()=> {
                    setDisabled(false)
                })
                .catch(() => {
                    alert('Operation could not be performed');
                    setDisabled(false)
                })
            ;
        } else {
            insertFollow(profile.id)
                .then(() => {
                    setDisabled(false)
                })
                .catch(() => {
                    alert('Operation could not be performed');
                    setDisabled(false)
                })
            ;
        }
    }

    return (
        <Wrapper>
                <Mobile>
                    <SearchPeople />
                </Mobile>
            <NewTitle>
                <div>
                    <ProfilePic src={profile.image_url} />
                    <p>{profile.name}'s posts</p>
                </div>

                {userId === user.id ? 
                '' 
                : 
                    <FollowButton 
                        follow={follow} 
                        onClick={handleFollowButton}
                        disabled={disabled}
                    >
                        {follow[0] ? 'Unfollow' : 'Follow'}
                    </FollowButton>
                }
            </NewTitle>
            <main>
                <Container>
                    <Posts>
                        {posts ? (
                        <PostsBox
                            setRefresh={setRefresh}
                            userEmail={profile.email}
                            posts={posts}
                            identifier={'user'}
                        />
                        ) : (
                        <TimelineMessage>Loading...</TimelineMessage>
                        )}
                    </Posts>
                </Container>
                <TrendingHashtags refresh={refresh}/>
            </main>
        </Wrapper>
    );
}

const NewTitle = styled.h2`
    height: 120px;
    width: 70vw;
    margin-top: 30px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 50px;

    font-family: var(--titles-font);
    color: var(--main-white);
    font-weight: 700;
    font-size: 50px;

    & > div {
        display: flex;
    }

    & > div > p {
        margin-left: 15px;
    }

    @media (max-width: 614px) {
        width: 100vw;
        margin-top: 30px;
        padding: 20px;
        
        & > div > p {
          font-size: 40px;
          margin-left: 10px;
        }
    }
`

const FollowButton = styled.button`
    height: 45px;
    width: 150px;

    color: ${props => props.follow[0] ? 'var(--accent-color)' : 'var(--main-white)'};
    background-color: ${props => props.follow[0] ? 'var(--main-white)' : 'var(--accent-color)'};
    border: none;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 700;
    font-family: var(--titles-font);

    &:active {
        font-size: calc(27px / 0.97);
        transform: scale(0.97);
    }

    &:disabled {
        background-color: var(--input-disabled-gray);
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
`

const Wrapper = styled.div`
    height: fit-content;
    min-height: 130vh;
    width: 100vw;
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    align-items: center;

    main {
        display: flex;
        column-gap: 80px;
    }

    & > main > div {
        margin-top: 15px;
    }
`

const Container = styled.section`
  height: fit-content;
  margin-top: 0px;
  width: 40vw;
  background-color: var(--background-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  
  
  & > h2 {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 15px;
    font-size: 50px;
  }

  & > h2 > p {
    margin-left: 20px;
  }

  @media (max-width: 614px) {
        width: 100vw;
        margin-top: 30px;
        h2{
          font-size: 40px;
          margin-left: 10px;
        }
    }
`;

const PublishBox = styled.div`  
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-white);
    height: fit-content;
    width: 40vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    img {
        display: none;
    }

    @media (max-width: 614px) {
      width: 100vw;
      margin-top: 35px;
      border-radius: 0px;
    }
`

const Posts = styled.div`
  margin-top: 15px;
  height: fit-content;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 614px) {
        width: 100vw;
    }
`;

export const Mobile = styled(Search)`
    display: none;
    z-index: 1;

    @media (max-width: 614px) {
        display: block;
        width: 90%;

        div input {
            width: 80vw;
        }
    }
`