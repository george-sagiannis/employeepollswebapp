// Define action type constants.
export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USERS_ANSWERS = "UPDATE_USERS_ANSWERS";
export const UPDATE_USERS_QUESTIONS = "UPDATE_USERS_QUESTIONS";

// Action creator for receiving and updating user data.
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS, // Action type indicating receiving user data.
    users, // Payload containing the received user data.
  };
}

// Action creator for updating a user's answers to questions.
export function updateUsersAnswers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USERS_ANSWERS, // Action type indicating updating user answers.
    authedUser, // Payload containing the authenticated user's id.
    qid, // Payload containing the question id.
    answer, // Payload containing the selected answer.
  };
}

// Action creator for updating a user's list of questions.
export function updateUsersQuestions(question) {
  return {
    type: UPDATE_USERS_QUESTIONS, // Action type indicating updating user questions.
    authedUser: question.author, // Payload containing the user id (author of the question).
    id: question.id, // Payload containing the question id.
  };
}
