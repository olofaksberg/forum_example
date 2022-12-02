/** @format */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../../app/App";
import { If } from "../../helpers/If";

import "./header.style.scss";

export const Header = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  return (
    <header className="flex JC-SB">
      <h1>TheForum</h1>

      <If condition={user}>
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
      </If>
    </header>
  );
};
