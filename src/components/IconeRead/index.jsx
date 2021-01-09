import React from 'react'
import PropTypes from 'prop-types'
import Read from 'assets/svg/readed.svg'
import Nonread from 'assets/svg/noread.svg'



import './IconeRead.scss'

const IconeRead = ({ isMe, isRead }) => {
    return (
        <>
            {isMe && (isRead ? <div className="message__checked-read">
                <img src={Read} alt="checked" />
            </div> : <div className="message__checked-read message__checked-read--no">
                    <img src={Nonread} alt="checked" />
                </div>)
            }
        </>
    )
}

IconeRead.propTypes = {
    isMe: PropTypes.any,
    isRead: PropTypes.any
}

export default IconeRead
