/** @format */

import { Post } from "../post/Post";

import "./postFeed.style.scss";

export const PostFeed = ({ posts }) => {
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
