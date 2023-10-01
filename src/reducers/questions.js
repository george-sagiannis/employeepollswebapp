// Importing action types from the actions/questions file.
import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  SAVE_QUESTION,
} from "../actions/questions";

// Reducer function for managing a single option within a question.
function option(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      // When ANSWER_QUESTION action is dispatched, add the authedUser to the list of votes for the option.
      const { authedUser } = action;
      const { votes } = state;

      return {
        ...state,
        votes: votes.concat([authedUser]),
      };
  }
}

// Reducer function for managing a single question.
function questionX(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      // When ANSWER_QUESTION action is dispatched, update the state of the selected answer option.
      const { answer } = action;

      return {
        ...state,
        [answer]: option(state[answer], action),
      };
  }
}

// Main questions reducer function.
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      // When RECEIVE_QUESTIONS action is dispatched, update the state with the received questions data.
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_QUESTION:
      // When ANSWER_QUESTION action is dispatched, update a specific question's state using the questionX reducer.
      const { qid } = action;

      return {
        ...state,
        [qid]: questionX(state[qid], action),
      };

    case SAVE_QUESTION:
      // When SAVE_QUESTION action is dispatched, add a new question to the state.
      const { question } = action;
      const { id } = question;

      return {
        ...state,
        [id]: question,
      };

    default:
      // If none of the actions match, return the current state.
      return state;
  }
}
