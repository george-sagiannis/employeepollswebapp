// Define an action type constant for setting the authenticated user.
export const SET_AUTHED_USER = "SET_AUTHED_USER";

// Action creator function for setting the authenticated user.
export function setAuthedUser(id) {
  // Return an action object with a type of SET_AUTHED_USER and the user's id as payload.
  return {
    type: SET_AUTHED_USER, // Action type indicating the purpose of the action.
    id, // The user's id passed as payload to be used by the reducer.
  };
}
