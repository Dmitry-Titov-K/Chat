import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classname'



import './Online.scss'



const Online = ({ online }) => {
    return (
        <div className={classNames("status", { "status--isOnline": online })}>
            {online ? "онлайн" : "офлайн"}</div>
    )

}
Online.propTypes = {
    online: PropTypes.bool

}

export default Online
