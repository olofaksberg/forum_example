/** @format */

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AddPost } from "../../components/views/addPost/AddPost";
import { Forum } from "../../components/views/forum/Forum";
import { Home } from "../../components/views/home/Home";
import { ProtectedRoute } from "./ProtectedRoute";

import { UserContext } from "../App";

export const AppRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/forum"
          element={
            <ProtectedRoute user={user}>
              <Forum />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forum/add_post"
          element={
            <ProtectedRoute user={user}>
              <AddPost />
            </ProtectedRoute>
          }
        />
    </Routes>
  );
};
