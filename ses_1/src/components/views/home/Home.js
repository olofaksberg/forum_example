/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ setUser }) => {
  const navigate = useNavigate();

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = async () => {
    const userContent = {
      name: usernameInput,
      password: passwordInput,
    };

    const res = await fetch("http://localhost:5500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userContent),
    }).then((response) => response.json());

    if (res.success) {
      setUser(res.data);
      navigate("/forum");
    }
  };

  const handleSignup = async () => {
    const userContent = {
      name: usernameInput,
      password: passwordInput,
    };

    const res = await fetch("http://localhost:5500/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userContent),
    }).then((response) => response.json());

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
        onChange={(e) => setUsernameInput(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPasswordInput(e.target.value)}
      />

      <button onClick={handleLogin}>sign in</button>

      <button onClick={handleSignup}>register</button>
    </>
  );
};
