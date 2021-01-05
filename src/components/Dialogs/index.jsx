
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
                    user={item.user}
                    message={item}
                    unread={0}
                    isMe={item.user._id} />))}
        </div>
    )
}

Dialogs.propTypes = {
    items: PropTypes.object
}
export default Dialogs
