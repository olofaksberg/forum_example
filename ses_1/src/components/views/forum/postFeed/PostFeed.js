/** @format */

import { useContext } from "react";

import { Post } from "../post/Post";

import { PostsContext } from "../../../../app/App";

import "./postFeed.style.scss";

export const PostFeed = () => {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <section className="flex FD-C FG-2">
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </section>
    </>
  );
};
