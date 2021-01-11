import React from 'react'
import PropTypes from 'prop-types';

import { generateAvatar } from 'utils/helpers'


import './Avatar.scss'



const Avatar = ({ user }) => {
    if (user.avatar)
        return <img src={user.avatar} alt={`Avatar ${user.fullname}`} />
    else {
        const { color, colorLighten } = generateAvatar(user._id)
        const temp = '';
        const firstChar = temp.concat(user.firstName[0], user.secondName[0])
        console.log(firstChar)
        return <div style={{
            background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
            className="avatar avatar--isEmpty">{firstChar}</div>
    }
}

Avatar.propTypes = {
    user: PropTypes.any

}

export default Avatar
