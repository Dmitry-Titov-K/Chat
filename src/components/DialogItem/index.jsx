
import React from 'react'
import { IconeRead } from 'components'// add Time component
import className from 'classname'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'


const GetData = create_at => {
    if (isToday(create_at)) {
        return format(create_at, 'HH:mm')
    } else {
        return format(create_at, 'dd/MM/yyyy')
    }
}

const GetAvatar = avatar => {
    if (avatar) {
        return (<div className="dialogs__item-avatar">
            <img src={avatar} alt="fullname" />
        </div>)
    } else if (avatar === null) {
        <div className="dialogs__item-avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/660/660611.svg" alt="fullname" />
        </div>
    } else {
        // make avatar function 
    }
}

import './DialogItem.scss'


const DialogItem = ({ user, message, unread, isMe }) => {
    return (
        <div className={className('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
            {GetAvatar(user.avatar)}
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {GetData(message.create_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>

                    {unread > 0 ? <div className={className('dialogs__item-info-bottom-counter',
                        { 'dialogs__item-info-bottom-counter-width': unread > 9 })}>
                            {unread > 9 ? '9+' : unread}</div>
                        : <IconeRead isMe={isMe} isRead={message.isRead} />}
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    user: PropTypes.object,
    unread: PropTypes.string,
    message: PropTypes.string,
    isMe: PropTypes.bool
}

export default DialogItem
