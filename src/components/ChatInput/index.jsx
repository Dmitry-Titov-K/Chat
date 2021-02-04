import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Input, Button, Upload } from 'antd'
import { SmileOutlined, AudioOutlined, SendOutlined, PaperClipOutlined } from "@ant-design/icons"

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import './ChatInput.scss'



const ChatInput = () => {

    const [pickerVision, setPickerVision] = useState(false)

    const onPickerVisionToogle = () => {

        setPickerVision(!pickerVision)

    }

    return (
        <div className='chat-input'>
            <div className="chat-input__emojiPicker"
                onMouseLeave={() => setPickerVision()}>
                {pickerVision && <Picker title={null} set='apple' />}
            </div>


            <Input size='large' prefix={
                <Button
                    onClick={() => onPickerVisionToogle()}
                    onMouseEnter={() => onPickerVisionToogle()}
                    type='link'><SmileOutlined /></Button>} />
            <Upload showUploadList={false}>
                <Button type='link'><PaperClipOutlined style={{ fontSize: '18px', color: '#000' }} />
                </Button>
            </Upload>



            <Button type='link'><AudioOutlined style={{ fontSize: '18px', color: '#000' }} /></Button>
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
