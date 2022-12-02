/** @format */

import { useState, createContext } from "react";
import { useMediaQuery } from "react-responsive";

import { Header } from "../components/layouts/header/Header";
import { AppRoutes } from "./appRoutes/AppRoutes";

import { SmallScreenContext } from "../components/helpers/SmallScreenContext";

import "./global.scss";

export const UserContext = createContext();

export const PostsContext = createContext();

const App = () => {
  const [user, setUser] = useState(false);
  const [posts, setPosts] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)'
  })
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' && '(min-width: 600px)' })

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const getDeviceClassName = () => {
    if (isDesktop) {
      return "desktop"
    } else if (isTablet) {
      return "tablet"
    } else if (isMobile) {
      return "mobile"
    }
  }

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <PostsContext.Provider
          value={{
            posts: posts,
            setPosts: setPosts,
          }}
        >
          <div className={`App ${getDeviceClassName()}`}>
            <Header />

            <AppRoutes />
          </div>
        </PostsContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
