import React from 'react'
import { Message } from 'components'
import './Home.scss'

const Home = () => {
    const date = new Date(2020,11,4);
    const date2 = new Date(2020,11,1);
    return (
        <section className='home'>
            <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                text='Hello' 
                date={date} />
                <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                text='📢 О чём данный курс?
                Как разработать свой чат на ReactJS, Redux + NodeJS, Socket.IO, MongoDB. Сделаем полноценный чат с возможностью загрузки фотографий, отправки аудиосообщений как в Telegram, VK, отправка Emoji (смайлов). Также со списком диалогов и поиска пользователей по E-Mail или имени.' 
                date={date2} />
        </section>
    )
}

export default Home
