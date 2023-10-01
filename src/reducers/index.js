// Importing necessary modules from Redux and react-redux-loading-bar.
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

// Importing individual reducers from project employee polls web app.
import authedUser from "./authedUser"; // Reducer for managing authenticated user.
import users from "./users"; // Reducer for managing user data.
import questions from "./questions"; // Reducer for managing question data.

// Combining all reducers into a single rootReducer using combineReducers.
export default combineReducers({
  authedUser, // Managing authenticated user state.
  users, // Managing user data state.
  questions, // Managing question data state.
  loadingBar: loadingBarReducer, // Managing loading bar state (react-redux-loading-bar) - with command npm i react-redux-loading-bar i have installed previously.
});
