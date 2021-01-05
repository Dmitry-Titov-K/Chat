
import React from 'react'
import { IconeRead } from 'components'// add Time component
import className from 'classname'
import PropTypes from 'prop-types'

const GetAvatar = avatar => {
    if (avatar) {
        return (<div className="dialogs__item-avatar">
            <img src={avatar} alt="fullname" />
        </div>)
    } else {
        //make avatar function
    }
}

import './DialogItem.scss'

const DialogItem = ({ user, unread }) => {
    return (
        <div className={className('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
            {GetAvatar("https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg")}
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {/* <Time date={new Date()} /> */}13:00
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта:
                    </p>

                    {unread > 0 ? <div className='dialogs__item-info-bottom-counter'>{unread}</div>
                        : <IconeRead isMe={true} isRead={true} />}
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    user: PropTypes.object,
    unread: PropTypes.string
}

export default DialogItem
