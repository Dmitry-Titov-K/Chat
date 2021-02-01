import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { messagesAction } from "redux/actions";
import { Messages as BaseMessages } from "components";

const Messages = ({ fetchMessages, setCurrentDialog, items, userId }) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items));

  const onSerchChange = (value) => {
    setFiltered(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      fetchMessages();
    } else {
      setFiltered(items);
    }
  }, [items]);
  return (
    <BaseMessages
      userId={userId}
      inputValue={inputValue}
      items={filtered}
      onSearch={onSerchChange}
      onSelectDialog={setCurrentDialog}
    />
  );
};

Messages.propTypes = {
  items: PropTypes.any,
  userId: PropTypes.any,
  fetchMessages: PropTypes.any,
  setCurrentDialog: PropTypes.any,
};
export default connect(({ messages }) => messages, messagesAction)(Messages);
