/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./addPost.style.scss";

export const AddPost = ({ setPosts, user }) => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  const handleSubmit = async () => {
    const postContent = {
      poster: user.name,
      text: textInput,
    };

    const res = await fetch("http://localhost:5500/create_post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postContent),
    }).then((response) => response.json());

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
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
      </form>

      <button onClick={handleSubmit}>SEND</button>
    </section>
  );
};
