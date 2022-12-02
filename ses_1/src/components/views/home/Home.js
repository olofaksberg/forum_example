/** @format */

import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../app/App";

import { POST } from "../../../utils/http";

export const Home = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleLogin = async () => {
    const userContent = {
      name: usernameInput.current.value,
      password: passwordInput.current.value
    };

    const res = await POST("/login", userContent);

    if (res.success) {
      setUser(res.data);
      navigate("/forum");
    }
  };

  const handleSignup = async () => {
    const userContent = {
      name: usernameInput.current.value,
      password: passwordInput.current.value
    };

    const res = await POST("/create_user", userContent);

    if (res.success) {
      setUser(res.data);
      navigate("/forum");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        ref={usernameInput}
      />

      <input
        type="password"
        placeholder="Password"
        ref={passwordInput}
      />

      <button onClick={handleLogin}>sign in</button>

      <button onClick={handleSignup}>register</button>
    </>
  );
};
