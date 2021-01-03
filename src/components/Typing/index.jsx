import React from 'react'
import PropTypes from 'prop-types';

import './Typing.scss'

const Typing = ({ isTyping }) => {
    return (
        <>
            {isTyping && <div className='message__is-typing'>
                <span></span>
                <span></span>
                <span></span>
            </div>}
        </>
    )
}

Typing.propTypes = {
    isTyping: PropTypes.bool,

}

export default Typing
