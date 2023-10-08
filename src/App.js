import { useEffect, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import QuestionPage from "./components/QuestionPage";
import NewQuestion from "./components/NewQuestion";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Leaderboard from "./components/Leaderboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const location = useLocation();

  const authed = props.authedUser !== null;

  function ProtectedRoute({ children }) {
    return authed ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
  }

  return (
    <Fragment>
      <LoadingBar style={{ backgroundColor: "#2171ec", height: "2px" }} />
      {!authed ? null : <Navbar />}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <ProtectedRoute>
              <NewQuestion />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          exact
          element={
            <ProtectedRoute>
              <QuestionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
