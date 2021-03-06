import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { dialogsAction } from "redux/actions";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ fetchDialogs, setCurrentDialog, items, userId }) => {
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
      fetchDialogs();
    } else {
      setFiltered(items);
    }
  }, [items]);
  return (
    <BaseDialogs
      userId={userId}
      inputValue={inputValue}
      items={filtered}
      onSearch={onSerchChange}
      onSelectDialog={setCurrentDialog}
    />
  );
};

Dialogs.propTypes = {
  items: PropTypes.any,
  userId: PropTypes.any,
  fetchDialogs: PropTypes.any,
  setCurrentDialog: PropTypes.any,
};
export default connect(({ dialogs }) => dialogs, dialogsAction)(Dialogs);
