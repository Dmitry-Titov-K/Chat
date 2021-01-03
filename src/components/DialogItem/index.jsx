
import React from 'react'
import { Time, IconeRead } from 'components'




import './DialogItem.scss'

const DialogItem = () => {
    return (
        <div className='dialogs__item'>
            <div className="dialogs__item-avatar">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg" alt="fullname" />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Федор Достоевский</b>
                    <span>
                        <Time date={new Date()} />
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        Свобода не в том, чтоб не сдерживать себя, а в том, чтоб владеть собой.
                    </p>
                    <IconeRead isMe={false} isRead={true} />
                </div>
            </div>
        </div>
    )
}



export default DialogItem
