import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

const QuestionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  const question = Object.values(questions).find(
    (question) => question.id === id
  );

  const author = Object.values(users).find(
    (user) => user.id === question.author
  );

  if (!authedUser || !question || !author) {
    return <Navigate to="" />;
  }

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
  };

  const percentage = (option, question) => {
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return `${(question.optionOne.votes.length / totalVotes) * 100} %`;
      case "optionTwo":
        return `${(question.optionTwo.votes.length / totalVotes) * 100} %`;
      default:
        return "";
    }
  };

  const hasVotedOptionOne = question.optionOne.votes.includes(authedUser);
  const hasVotedOptionTwo = question.optionTwo.votes.includes(authedUser);
  const isVoted = hasVotedOptionOne || hasVotedOptionTwo;

  return (
    <div className="center">
      <h1>Poll by {author.id}</h1>
      <div>
        <img src={author.avatarURL} alt="pic" className="avatar" />
        <div>{author.name}</div>
        <div>{question.author}</div>
      </div>
      <div>
        <h2>Would You Rather</h2>
      </div>
      <div className="vote-container">
        <div>
          <p>Option 1</p>
          <p>{question.optionOne.text}</p>
          <button
            className="vote-button"
            onClick={handleOptionOne}
            disabled={isVoted}
          >
            {!isVoted && (
              <h3>
                <p>Click</p>
              </h3>
            )}
          </button>
          {isVoted && (
            <p>
              {question.optionOne.votes.length} Votes -{" "}
              {percentage("optionOne", question)}
            </p>
          )}
          {hasVotedOptionOne && (
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                You voted:
              </span>{" "}
              {question.optionOne.text}
            </p>
          )}
        </div>

        <div>
          <p>Option 2</p>
          <p>{question.optionTwo.text}</p>
          <button
            className="vote-button"
            onClick={handleOptionTwo}
            disabled={isVoted}
          >
            {!isVoted && (
              <h3>
                <p>Click</p>
              </h3>
            )}
          </button>
          {isVoted && (
            <p>
              {question.optionTwo.votes.length} Votes -{" "}
              {percentage("optionTwo", question)}
            </p>
          )}
          {hasVotedOptionTwo && (
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                You voted:
              </span>{" "}
              {question.optionTwo.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
