import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className="center">
      <p>Page not found</p>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
};

export default PageNotFound;
