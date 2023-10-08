import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Logout = ({ dispatch }) => {
  const handleLogout = () => {
    // Dispatch the action to reset the authenticated user
    dispatch(setAuthedUser(null));
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default connect()(Logout);
