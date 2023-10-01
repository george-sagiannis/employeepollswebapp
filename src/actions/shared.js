// Importing necessary modules and functions.
import { _getInitialData } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Action creator for handling initial data loading.
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading()); // Show loading bar while fetching data.

    // Call the _getInitialData function to fetch initial data.
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users)); // Dispatch an action to receive and update user data.
      dispatch(receiveQuestions(questions)); // Dispatch an action to receive and update question data.
      dispatch(hideLoading()); // Hide the loading bar after data fetching is complete.
    });
  };
}
