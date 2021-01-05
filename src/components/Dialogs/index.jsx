
import React from 'react'
import PropTypes from 'prop-types'
import { DialogItem } from 'components'


import './Dialogs.scss'

const Dialogs = ({ items }) => {
    return (
        <div className="dialogs">
            {items.map(item => (
                <DialogItem
                    key={item._id}
                    user={item.message.user}
                    message={item.message}
                    unread={0} />))}
        </div>
    )
}

Dialogs.propTypes = {
    items: PropTypes.object
}

export default Dialogs
