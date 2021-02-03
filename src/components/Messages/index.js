import React from "react";
import PropTypes from "prop-types";
import className from "classname";

import { Empty, Spin, Space } from "antd"; //add Empty
import { Message } from "components";

import "./messages.scss";

const Messages = ({ BlockRef, isLoading, items }) => {
  //add items
  return (
    <div
      className={className("messages", { "messages--loading": isLoading })}
      ref={BlockRef}
    >
      {isLoading ? (
        <Space size="middle">
          <Spin size="large" tip="Загрузка сообщений..." />
        </Space>
      ) : items && !isLoading ? (
        <div>
          {items.length > 0 ? (
            items.map((item) => <Message {...item} key={item._id} />)
          ) : (
            <Empty description="Сообщений нет" />
          )}
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
  BlockRef: PropTypes.any,
};
export default Messages;
