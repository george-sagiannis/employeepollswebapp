import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LOGO from "../assets/employee1.png";

const Login = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const autheduser = Object.values(props.users).filter(
    (user) => user.id === userName && user.password === password
  );

  const handleLogIn = (event) => {
    event.preventDefault();
    if (
      !autheduser ||
      userName === "" ||
      password === "" ||
      autheduser.length === 0
    ) {
      setErrorMessage(
        "Please attempt to log in again and double-check your username and password."
      );
    } else {
      props.dispatch(setAuthedUser(autheduser[0].id));
      navigate(state?.path || "/");
    }
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const isEmpty = () => userName === "" || password === "";

  return (
    <div className="center">
      <h1>Employee Polls</h1>
      <div>
        <img src={LOGO} alt="logo" className="custom-avatar" />
      </div>
      <p className="bold-text">Log in</p>
      <div className="login-form-container">
        <p className="login-label">User</p>
        <form onSubmit={handleLogIn} className="login-form">
          <input
            data-testuser="testId-name-input"
            type="text"
            placeholder="User"
            onChange={handleUserName}
            className="login-input"
            autoComplete="username"
          />
          <p className="login-label">Password</p>
          <input
            data-testuser="testId-password-input"
            type="password"
            placeholder="Password"
            onChange={handleUserPassword}
            className="login-input"
            autoComplete="current-password"
          />
          <button
            data-testuser="testId-submit-button"
            className="login-button"
            disabled={isEmpty()}
          >
            Submit
          </button>
          <p data-testuser="testId-error" className="login-error">
            {errorMessage}
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(Login);
