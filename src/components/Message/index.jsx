import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Time, IconeRead, Typing } from 'components'
import ClassNames from 'classnames'
import { convertCurrentTime } from 'utils/helpers'

import waveSvg from 'assets/svg/wave.svg'
import playSvg from 'assets/svg/play.svg'
import pauseSvg from 'assets/svg/pause.svg'



import './Message.scss'

const MessageAudio = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressBar, setProgressBar] = useState(0)

    const audioElem = useRef(null)

    useEffect(() => {

        if (audioElem.current !== null) {
            console.log(audioElem)
            audioElem.current.addEventListener(
                'playing',
                () => {
                    setIsPlaying(true)
                },
                false),
                audioElem.current.addEventListener(
                    'ended',
                    () => {
                        setIsPlaying(false)
                        setProgressBar(0)
                        setCurrentTime(0)
                    },
                    true),
                audioElem.current.addEventListener(
                    'pause',
                    () => {
                        setIsPlaying(false)
                    },
                    true),
                audioElem.current.addEventListener(
                    'timeupdate',
                    () => {
                        const duration = (audioElem.current && audioElem.current.duration) || 0;
                        setCurrentTime(audioElem.current.currentTime),
                            setProgressBar((audioElem.current.currentTime / duration) * 100)
                    })
        }
    }, [])

    const tooglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }


    }
    return (<div className="message__audio">
        <audio ref={audioElem} src={audioSrc} preload="auto"></audio>
        <div className="message__audio-progress" style={{ width: `${progressBar}%` }}>

        </div>
        <div className="message__audio-info">
            <div className="message__audio-btn">
                <button onClick={tooglePlay}>
                    {isPlaying ?
                        <img src={pauseSvg} alt="play icon" />
                        : <img src={playSvg} alt="play icon" />}
                </button>
            </div>
            <div className="message__audio-wave">
                <img src={waveSvg} alt="" />
            </div>
            <div className="message__audio-duration">
                <span>{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    </div>

    )


}

const Message = ({ avatar, user, text, date, isMe, attachment, isTyping, audio }) => {


    return (
        <div className={ClassNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachment && attachment.length === 1,
            "message--is-audio": audio
        })}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user}`} />
            </div>
            <div className="message__content">
                <IconeRead isMe={false} isRead={true} />
                <div className="message__info">
                    {(audio || text || isTyping) && (<div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && <Typing isTyping={true} />}
                        {audio && <MessageAudio audioSrc={audio} />}
                    </div>)}


                    {attachment && <div className="message__attachment">
                        {attachment.map(item => (
                            <div key={item.id} className="message__attachment-item">
                                <img src={item.url} alt="" />
                            </div>
                        )
                        )}
                    </div>
                    }

                    {date &&
                        <time className="message__date"><Time date={date} /></time>}

                </div>

            </div>
        </div>
    )
}


Message.defaultProps = {
    user: {}
}
Message.propTypes = {
    avatar: PropTypes.any,
    text: PropTypes.any,
    date: PropTypes.any,
    user: PropTypes.any,
    isMe: PropTypes.any,
    isRead: PropTypes.any,
    attachment: PropTypes.any,
    isTyping: PropTypes.any,
    audio: PropTypes.any,
    audioSrc: PropTypes.any

}
MessageAudio.propTypes = {
    audioSrc: PropTypes.any
}
export default Message