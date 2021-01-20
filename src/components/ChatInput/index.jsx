import React from 'react'
import PropTypes from 'prop-types';
import { Input, Button } from 'antd'
import { SmileOutlined, AudioOutlined, SendOutlined } from "@ant-design/icons"

import './ChatInput.scss'

const SmileButton = () => {
    return (
        <React.Fragment>
            <Button type='link'><AudioOutlined style={{ fontSize: '18px', color: '#000' }} />
            </Button>
            <Button type='link'><SmileOutlined style={{ fontSize: '18px', color: '#000' }} /></Button>
        </React.Fragment>
    )
}


const ChatInput = () => {
    return (
        <div className='chat-input'>
            <Input size='large' prefix={<Button type='link'><SmileOutlined /></Button>} suffix={<SmileButton />} />
            <Button type='link'>
                <SendOutlined style={{ fontSize: '18px', color: '#000' }} />
            </Button>
        </div>
    )
}

ChatInput.propTypes = {
    user: PropTypes.any

}

export default ChatInput
