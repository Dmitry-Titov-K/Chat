import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "components";

const Messages = ({ items }) => {
  const date = new Date(2020, 11, 4);
  //const date2 = new Date(2020, 11, 1);
  return items ? (
    <>
      <Message
        avatar="https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg"
        attachment={[
          {
            id: 1,
            fileName: "file1",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
        date={date}
      />
    </>
  ) : (
    <Empty />
  );
};

Messages.propTypes = {
  items: PropTypes.any,
};
export default Messages;
