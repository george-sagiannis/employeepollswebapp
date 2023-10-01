// Importing action types from the actions/users file.
import {
  RECEIVE_USERS,
  UPDATE_USERS_ANSWERS,
  UPDATE_USERS_QUESTIONS,
} from "../actions/users";

// Reducer function for updating a user's answers.
function userAnswer(state = {}, action) {
  // Destructure action to get qid and answer.
  const { qid, answer } = action;
  // Destructure state to get the current answers.
  const { answers } = state;

  // Return a new state with the updated answers.
  return {
    ...state,
    answers: {
      ...answers,
      [qid]: answer,
    },
  };
}

// Reducer function for updating a user's questions.
function userQuestion(state = {}, action) {
  // Destructure action to get id.
  const { id } = action;
  // Destructure state to get the current questions.
  const { questions } = state;

  // Return a new state with the id added to the questions array.
  return {
    ...state,
    questions: questions.concat(id),
  };
}

// Main users reducer function.
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      // When RECEIVE_USERS action is dispatched, update the state with the received users data.
      return {
        ...state,
        ...action.users,
      };
    }

    case UPDATE_USERS_ANSWERS: {
      // When UPDATE_USERS_ANSWERS action is dispatched, update a specific user's answers using the userAnswer reducer.
      const { authedUser } = action;

      return {
        ...state,
        [authedUser]: userAnswer(state[authedUser], action),
      };
    }

    case UPDATE_USERS_QUESTIONS: {
      // When UPDATE_USERS_QUESTIONS action is dispatched, update a specific user's questions using the userQuestion reducer.
      const { authedUser } = action;

      return {
        ...state,
        [authedUser]: userQuestion(state[authedUser], action),
      };
    }

    default:
      // If none of the actions match, return the current state.
      return state;
  }
}
