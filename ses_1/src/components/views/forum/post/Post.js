/** @format */

import "./post.style.scss";

export const Post = ({ post }) => {
  return (
    <>
      <section className="post">
        <h3>{post.poster}</h3>

        <i>{post.createdAt}</i>

        <p>{post.text}</p>
      </section>
    </>
  );
};
