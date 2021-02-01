
import React from 'react'
import { IconeRead, Avatar } from 'components'// add Time component
import className from 'classname'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import isToday from 'date-fns/isToday'
import './DialogItem.scss'



const GetData = create_at => {
    const correctData = parseISO(create_at)
    if (isToday(create_at)) {
        return format(correctData, 'HH:mm')
    } else {
        console.log(format(correctData, 'dd.MM.yyyy '))
        return format(correctData, 'dd.MM.yyyy ')
    }
}


const DialogItem = ({ message, unread, isMe, onSelect }) => {
    console.log(message.create_at)
    return (

        <div className={className('dialogs__item', { 'dialogs__item--online': message.user.isOnline })}
            onClick={onSelect.bind(this, message.user._id)}>
            <div className="dialogs__item-avatar"><Avatar user={message.user} /></div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{message.user.fullname}</b>
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
    user: PropTypes.any,
    unread: PropTypes.any,
    message: PropTypes.any,
    isMe: PropTypes.any,
    onSelect: PropTypes.any,
    _id: PropTypes.any
}

export default DialogItem
