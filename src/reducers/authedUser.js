import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser";

// Load the authedUser state from localStorage (if it exists)
const authedUserFromStorage = localStorage.getItem("authedUser");

export default function authedUser(state = authedUserFromStorage, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      localStorage.setItem("authedUser", action.id);
      return action.id;
    case LOGOUT_AUTHED_USER:
      localStorage.removeItem("authedUser");
      return null;
    default:
      return state;
  }
}
