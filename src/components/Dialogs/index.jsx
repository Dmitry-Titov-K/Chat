
import React from 'react'
import PropTypes from 'prop-types'
import { DialogItem } from 'components'

import orderBy from 'lodash/orderBy'

import './Dialogs.scss'

const Dialogs = ({ items }) => {
    return (
        
        <div className="dialogs">
            {orderBy(items, ["create_at"],['desc']).map(item=>(
                <DialogItem
                key={item._id}
                message={item}
                isMe={item.user._id} />
                ))}
           
        </div>
    )
}

Dialogs.propTypes = {
    items: PropTypes.object
}
export default Dialogs
