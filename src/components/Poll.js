import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const { Text } = Typography;

const PollDetailPage = ({ id, name, avatarURL, timestamp }) => (
  <Card>
    <div>
      <Avatar src={avatarURL} />
      <div>
        <Text strong>{name}</Text>
        <Text type="secondary">{formatDate(timestamp)}</Text>
      </div>
    </div>
    <Link to={`/questions/${id}`}>
      <Button type="primary" block>
        Show
      </Button>
    </Link>
  </Card>
);

// Define mapStateToProps to access data from the Redux store
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const question = state.questions[id];
  const { name, avatarURL, timestamp } = state.users[question.author];

  return {
    name,
    avatarURL,
    timestamp,
  };
};

export default connect(mapStateToProps)(PollDetailPage);
