import React from "react";
import PropTypes from "prop-types";
import className from "classname";

import { Empty, Spin, Space } from "antd"; //add Empty
import { Message } from "components";

import "./messages.scss";

const Messages = ({ isLoading, items }) => {
  //add items
  return (
    <div className={className("messages", { "messages--loading": isLoading })}>
      {isLoading ? (
        <Space size="middle">
          <Spin size="large" tip="Загрузка сообщений..." />
        </Space>
      ) : items && !isLoading && items.length ? (
        <div>
          {items.map((item) => (
            <Message {...item} key={item._id} />
          ))}
        </div>
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );

  /*  items && items.length ? (
   
  ) : (
    
  ); */
};

Messages.propTypes = {
  items: PropTypes.any,
  isLoading: PropTypes.any,
};
export default Messages;
