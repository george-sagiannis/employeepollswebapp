import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (event) => {
    setFirstOption(event.target.value);
  };

  const handleSecondOptionChange = (event) => {
    setSecondOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  const isEmpty = () => firstOption === "" || secondOption === "";

  return (
    <div className="center">
      <h1>Would You Rather</h1>
      <h3 className="poll-text">Create Your Own Poll</h3>
      <form onSubmit={handleSubmit}>
        <div className="textareas-container">
          <div>
            <label htmlFor="firstOption" className="bold-text">
              First Option
            </label>
            <input
              type="text"
              id="firstOption"
              className="input input-field"
              value={firstOption}
              onChange={handleFirstOptionChange}
              placeholder={"Option One"}
            />
          </div>
          <div>
            <label htmlFor="firstOption" className="bold-text">
              Second Option
            </label>
            <input
              type="text"
              id="secondOption"
              className="input input-field"
              value={secondOption}
              onChange={handleSecondOptionChange}
              placeholder={"Option Two"}
            />
          </div>
        </div>

        <button className="login-button2" type="submit" disabled={isEmpty()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
