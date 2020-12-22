import React from 'react'
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'



import './Message.scss'

const Message = ({avatar,user,text,date}) => {
    return (
     <div className='message'>
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user}`}/>
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <time className="message__date">{formatDistanceToNow(date, {locale: ruLocale, addSuffix: true})}</time>
        </div>
     </div>
    )
}
Message.defaultProps ={
    user:{}
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.any,
    user: PropTypes.object
    
}

export default Message