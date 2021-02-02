import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { messagesAction } from "redux/actions";
import { Messages as BaseMessages } from "components";

const Messages = ({ isLoading, fetchMessages, currentDialogId, items }) => {
  useEffect(() => {
    currentDialogId !== null ? fetchMessages(currentDialogId) : null;
  }, [currentDialogId]);
  useEffect(() => {}, []);
  return <BaseMessages items={items} isLoading={isLoading} />;
};

Messages.propTypes = {
  items: PropTypes.any,
  userId: PropTypes.any,
  fetchMessages: PropTypes.any,
  setCurrentDialog: PropTypes.any,
  currentDialogId: PropTypes.any,
  isLoading: PropTypes.any,
};
export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialog,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesAction
)(Messages);
