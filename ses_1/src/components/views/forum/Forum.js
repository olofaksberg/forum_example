/** @format */

import { useEffect, useState } from "react";
import { PostFeed } from "./postFeed/PostFeed";

import { AddPostButton } from "./addPostButton/AddPostButton";

import "./forum_global.style.scss";

export const Forum = ({ posts, setPosts }) => {
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5500/get_all_posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    setPosts(res.data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    if (!posts) {
      fetchPosts();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <section className="view_forum">
        <PostFeed posts={posts} />

        <AddPostButton />
      </section>
    </>
  );
};
