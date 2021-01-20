
import React from 'react'
import PropTypes from 'prop-types'
import { DialogItem } from 'components'
import { Input } from 'antd'
import orderBy from 'lodash/orderBy'
import { SearchOutlined } from '@ant-design/icons'

import './Dialogs.scss'

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
    return (
        <div className="dialogs">
            <div className="chat__sidebar-search">
                <Input
                    placeholder="Поиск по контактам"
                    prefix={<SearchOutlined />}
                    onChange={e => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
            {orderBy(items, ["create_at"], ['desc']).map(item => (
                <DialogItem
                    key={item._id}
                    message={item}
                    isMe={item.user._id === userId} {...items} />
            ))}

        </div>
    )
}

Dialogs.propTypes = {
    items: PropTypes.any,
    userId: PropTypes.any,
    onSearch: PropTypes.any,
    inputValue: PropTypes.any

}
export default Dialogs
