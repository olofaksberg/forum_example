/** @format */

import { useEffect, useState, useContext } from "react";
import { PostFeed } from "./postFeed/PostFeed";

import { AddPostButton } from "./addPostButton/AddPostButton";

import { GET } from "../../../utils/http";

import { PostsContext } from "../../../app/App";

import "./forum_global.style.scss";

export const Forum = () => {
  const { posts, setPosts } = useContext(PostsContext);

  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await GET("/get_all_posts");

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
        <PostFeed />

        <AddPostButton />
      </section>
    </>
  );
};
