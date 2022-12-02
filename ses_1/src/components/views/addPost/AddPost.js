/** @format */

import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PostsContext, UserContext } from "../../../app/App";

import { POST } from "../../../utils/http";

import "./addPost.style.scss";

export const AddPost = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { setPosts } = useContext(PostsContext);

  const textInput = useRef(null);

  const handleSubmit = async () => {
    const postContent = {
      poster: user.name,
      text: textInput.current.value,
    };

    const res = await POST("/create_post", postContent);

    if (res.success) {
      setPosts((prev) => [res.data, ...prev]);
      navigate("/forum");
    }
  };

  return (
    <section className="view_add-post">
      <form>
        <textarea
          cols="30"
          rows="10"
          placeholder="Whatsup?"
          ref={textInput}
        ></textarea>
      </form>

      <button onClick={handleSubmit}>SEND</button>
    </section>
  );
};
