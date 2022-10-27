import { Tooltip } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";
import { IconWrapper } from "../../assets/styles/IconWrapper";
import { renderTimeLineContext, userContext } from "../../context/userContext";
import { deletePostLike, getPostLike, postPostLike } from "../../services/api";

export default function Like({ id }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [tooltipDescription, setTooltipDesc] = useState("");
  const { renderTimeline, setRender } = useContext(renderTimeLineContext);
  const { user } = useContext(userContext);

  function createTooltipText({ usersLikesPost, likeCount }) {
    let likeTooltipText;
    const postLikes = parseInt(likeCount);
    var filteredUsers = usersLikesPost[0].filter((userLike) => {
      return userLike !== user.name;
    });

    if (postLikes > 2) {
      likeTooltipText = `and other ${postLikes - 2} ${
        postLikes - 2 === 1 ? "person" : "persons"
      } liked this post.`;
    } else {
      likeTooltipText = `liked this post.`;
    }

    switch (filteredUsers.length) {
      case 0:
        setTooltipDesc("");
        break;
      case 1:
        setTooltipDesc(`${filteredUsers[0]} ${likeTooltipText}`);
        break;
      case 2:
        setTooltipDesc(
          `${filteredUsers[0]}, ${filteredUsers[1]} ${likeTooltipText}`
        );
        break;
      default:
        setTooltipDesc(
          `${filteredUsers[0]}, ${filteredUsers[1]} ${likeTooltipText}`
        );
        break;
    }
  }

  useEffect(() => {
    getPostLike(id)
      .then((answer) => {
        const usersLikesPost = answer.data.users;

        setLike(answer.data.likedByUser);
        setLikeCount(answer.data.likes_number);
        createTooltipText({ usersLikesPost, likeCount });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [renderTimeline, id, like]);

  function likePost() {
    postPostLike(id)
      .then(() => {
        setRender(!renderTimeline);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function dislikePost() {
    deletePostLike(id)
      .then(() => {
        setRender(!renderTimeline);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Tooltip title={tooltipDescription}>
      <Wrapper like={like}>
        {like ? (
          <IoHeart onClick={dislikePost} />
        ) : (
          <IoHeartOutline onClick={likePost} />
        )}
        <p>{likeCount} likes</p>
      </Wrapper>
    </Tooltip>
  );
}

const Wrapper = styled(IconWrapper)`
    & > svg {
        color: ${(props) => (props.like ? "var(--like-red)" : "var(--main-white)")};
        transition: color 0.4s linear;
        animation: liked 0.4s ease;
    }

    @keyframes liked {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;
