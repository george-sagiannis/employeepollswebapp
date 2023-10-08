import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Question = ({ question, author }) => {
  return (
    <div className="poll">
      <img src={author.avatarURL} alt="Author" className="avatar" />
      <div className="poll-info">
        <div>
          <span>{author.name}</span>
          <div>{question.author}</div>
          <div>{formatDate(question.timestamp)}</div>
          <div className="poll-option">
            <p>Question 1: {question.optionOne.text}</p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                Voted by:
              </span>{" "}
              {question.optionOne.votes.join(", ")}{" "}
              {/* Join names without spaces */}
            </p>
          </div>
          <div className="divider-line"></div>{" "}
          {/* Use the CSS class for the divider line */}
          <div className="poll-option">
            <p>Question 2: {question.optionTwo.text}</p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                Voted by:
              </span>{" "}
              {question.optionTwo.votes.join(", ")}{" "}
              {/* Join names without spaces */}
            </p>
          </div>
          <div className="center">
            <Link to={`questions/${question.id}`} className="btn">
              Show
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Question);
