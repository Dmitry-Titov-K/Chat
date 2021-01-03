import React from 'react'
import PropTypes from 'prop-types';
import { Time, IconeRead, Typing } from 'components'
import ClassNames from 'classnames'




import './Message.scss'



const Message = ({ avatar, user, text, date, isMe, attachment, isTyping }) => {
    return (
        <div className={ClassNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachment && attachment.length === 1
        })}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user}`} />
            </div>
            <div className="message__content">
                <IconeRead isMe={false} isRead={true} />
                <div className="message__info">
                    {(text || isTyping) && (<div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && <Typing isTyping={true} />}
                    </div>)}
                    <div className="message__attachment">
                        {attachment &&
                            attachment.map(item => (
                                <div key={item.id} className="message__attachment-item">
                                    <img src={item.url} alt="" />
                                </div>
                            )
                            )
                        }
                    </div>
                    {date &&
                        <time className="message__date"><Time date={date} /></time>}

                </div>

            </div>
        </div>
    )
}
Message.defaultProps = {
    user: {}
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.any,
    user: PropTypes.object,
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
    attachment: PropTypes.array,
    isTyping: PropTypes.bool

}

export default Message