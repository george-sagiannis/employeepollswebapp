// Importing the SET_AUTHED_USER action type from the actions/authedUser file.
import { SET_AUTHED_USER } from "../actions/authedUser";

// Reducer function for managing the authenticated user.
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      // When SET_AUTHED_USER action is dispatched, update the state to the user's id (action.id).
      return action.id;
    default:
      // If none of the actions match, return the current state (or null if not authenticated).
      return state;
  }
}
