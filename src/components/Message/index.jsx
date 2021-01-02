import React from 'react'
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import ClassNames from 'classnames'
import Read from 'assets/svg/readed.svg'
import Nonread from 'assets/svg/noread.svg'



import './Message.scss'


const Message = ({ avatar, user, text, date, isMe, isRead, attachment, isTyping }) => {
    return (
        <div className={ClassNames("message", { 
            "message--isme": isMe, 
            "message--is-typing": isTyping ,
            "message--image": attachment && attachment.length ===1
        })}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user}`} />
            </div>
            <div className="message__content">
                {isMe && (isRead ? <div className="message__checked-read">
                    <img src={Read} alt="checked" />
                </div> : <div className="message__checked-read message__checked-read--no">
                        <img src={Nonread} alt="checked" />
                    </div>)
                }
                <div className="message__info">
                    {(text || isTyping)&&(<div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && <div className='message__is-typing'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>}
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
                        <time className="message__date">{formatDistanceToNow(date, { locale: ruLocale, addSuffix: true })}</time>}

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