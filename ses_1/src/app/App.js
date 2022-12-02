/** @format */

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Header } from "../components/layouts/header/Header";
import { Forum } from "../components/views/forum/Forum";
import { AddPost } from "../components/views/addPost/AddPost";
import { Home } from "../components/views/home/Home";

import "./global.scss";

const App = () => {
  const [user, setUser] = useState(false);
  const [posts, setPosts] = useState(false);

  return (
    <>
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />

          <Route
            path="/forum"
            element={<Forum posts={posts} setPosts={setPosts} />}
          />

          <Route
            path="/forum/add_post"
            element={<AddPost setPosts={setPosts} user={user} />}
          />
        </Routes>
      </div>
      </Router>
    </>
  );
};

export default App;