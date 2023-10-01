// Importing necessary modules and functions.
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUsersQuestions } from "./users";

// Define action type constants.
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

// Action creator for receiving questions and updating the state.
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS, // Action type indicating receiving questions.
    questions, // Payload containing the received questions data.
  };
}

// Action creator for handling the answer to a question.
export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading()); // Show loading bar while processing.

    // Call the _saveQuestionAnswer function to save the answer in the data source.
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(addAnswer({ authedUser, qid, answer })); // Dispatch an action to add the answer to the state.
      })
      .then(() => dispatch(hideLoading())); // Hide the loading bar after processing.
  };
}

// Action creator for handling the saving of a new question.
export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading()); // Show loading bar while processing.

    // Call the _saveQuestion function to save the new question in the data source.
    return _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(saveQuestion(formattedQuestion)); // Dispatch an action to save the question to the state.
        dispatch(updateUsersQuestions(formattedQuestion)); // Dispatch an action to update the user's questions.
      })
      .then(() => dispatch(hideLoading())) // Hide the loading bar after processing.
      .catch((e) => console.log("Error from handleSaveQuestion: ", e)); // Handle any errors that occur.
  };
}

// Action creator for adding an answer to a question.
function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION, // Action type indicating adding an answer.
    authedUser, // Payload containing the authenticated user's id.
    qid, // Payload containing the question id.
    answer, // Payload containing the selected answer.
  };
}

// Action creator for saving a new question.
function saveQuestion(question) {
  return {
    type: SAVE_QUESTION, // Action type indicating saving a question.
    question, // Payload containing the formatted question data.
  };
}
