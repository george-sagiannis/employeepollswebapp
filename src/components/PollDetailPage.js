import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Poll from "./Poll";
import PageNotFound from "./PageNotFound";

const PollPage = (props) => {
  const { questionIds } = props;

  const { questionId } = useParams();

  return (
    <div className="poll-page">
      {questionIds.includes(questionId) ? (
        <Poll id={questionId} />
      ) : (
        <PageNotFound page="poll" />
      )}{" "}
      {/* Corrected component name */}
    </div>
  );
};

const mapStateToProps = ({ questions }) => {
  const questionIds = Object.keys(questions);
  return {
    questionIds,
  };
};

export default connect(mapStateToProps)(PollPage);
