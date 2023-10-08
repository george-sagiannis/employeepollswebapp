import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./Logout";

const items = [
  {
    label: "Home",
    key: "home",
    path: "/",
  },
  {
    label: "Leaderboard",
    key: "leaderboard",
    path: "/leaderboard",
  },
  {
    label: "New Poll",
    key: "newpoll",
    path: "/add",
  },
];

const Nav = ({ authedUser, author }) => {
  const location = useLocation();

  return (
    <div className="nav-container">
      <ul className="nav-list">
        {items.map((item) => (
          <li
            key={item.key}
            className={`nav-item${
              location.pathname === item.path ? " active-nav-item" : ""
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      {authedUser && (
        <div className="nav-avatar">
          <img
            src={authedUser.avatarURL}
            alt={authedUser.name}
            className="avatar"
          />
          {author.id} &nbsp; {/* Display the author's name here */}
          <Logout />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser],
  author: users[authedUser], // Assuming you want to display the author for the authenticated user
});

export default connect(mapStateToProps)(Nav);
