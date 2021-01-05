
import React from 'react'
import { IconeRead } from 'components'// add Time component


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

const DialogItem = () => {
    return (
        <div className='dialogs__item'>
            {GetAvatar("https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg")}
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Федор Достоевский </b>
                    <span>
                        {/* <Time date={new Date()} /> */}13:00
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта:
                    </p>
                    <IconeRead isMe={false} isRead={true} />
                    <div className='dialogs__item-info-bottom-counter'>5</div>
                </div>
            </div>
        </div>
    )
}



export default DialogItem
