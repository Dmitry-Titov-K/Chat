// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'





const Time = ({ date }) => {
    return (
        <>
            {formatDistanceToNow(date, {
                locale: ruLocale, addSuffix: true
            })}
        </>
    )
}

Time.propTypes = {
    date: PropTypes.object,

}

export default Time
