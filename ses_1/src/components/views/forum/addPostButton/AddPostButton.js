/** @format */

import { Link } from "react-router-dom";

import "./addPostButton.style.scss";

export const AddPostButton = () => {
  return (
    <Link className="add_post pointer" to="/forum/add_post">
      +
    </Link>
  );
};
