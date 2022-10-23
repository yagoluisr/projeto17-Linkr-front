import { makeStyles, TextField } from "@material-ui/core";
import { updatePost } from "../../services/api";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  input: {
    "& .MuiInputBase-root": {
      color: "#B7B7B7",
      margin: "0 0 15px 0",
    },
    "& .MuiInputBase-root.Mui-focused": {
      backgroundColor: "#EFEFEF",
      color: "#9F9F9F",
    },
  },
});

export default function PostEditField({
  id,
  inputRef,
  postDescription,
  setRefresh,
  refresh,
  setValue,
  value,
  editPost,
  setEditPost,
  description,
  setDescription,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const tagStyle = {
    color: "#FFFFFF",
    fontWeight: 700,
    cursor: "pointer",
  };
  function handleOnChange(event) {
    setValue(event.target.value);
    setDescription(event.target.value);
  }
  return editPost ? (
    <ReactTagify
      tagStyle={tagStyle}
      tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
    >
      <ReactTagifyContainer>{postDescription}</ReactTagifyContainer>
    </ReactTagify>
  ) : (
    <PostTextField
      id="outlined-multiline-flexible"
      maxRows={6}
      inputRef={inputRef}
      className={classes.input}
      value={value}
      onChange={handleOnChange}
      variant="outlined"
      autoComplete="off"
      disabled={editPost}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          const body = { description };
          updatePost({ id, body })
            .then(() => {
              setEditPost(true);
              setRefresh(!refresh);
            })
            .catch((error) => {
              console.error(error);
              alert(
                "There was an error trying to update the your post, please try again"
              );
            });
          event.preventDefault();
        }
        if (event.key === "Escape") {
          setValue(postDescription);
          setEditPost(true);
          setRefresh(!refresh);
        }
      }}
      multiline
    />
  );
}

const PostTextField = styled(TextField)`
  width: 91%;
  fieldset {
    border-style: none;
    color: red;
  }
  .PrivateNotchedOutline-root-3 {
    border-style: none;
  }
  .MuiOutlinedInput-multiline {
    padding: 12px 10px 12px 5px;
  }
`;

const ReactTagifyContainer = styled.div`
  margin-top: 10px;
  padding-right: 26px;
  line-height: 20px;
`;
