/** @format */

import { useNavigate } from "react-router-dom";

import "./header.style.scss";

export const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  return (
    <header className="flex JC-SB">
      <h1>TheForum</h1>

      {user && (
        <div>
          <div className="user">{user.name}</div>
          <button
            className="logout"
            onClick={() => {
              setUser(false);
              navigate("/");
            }}
          >
            logout
          </button>
        </div>
      )}
    </header>
  );
};
