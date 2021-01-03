import React from 'react'
import { DialogItem } from 'components' // add Message and undcomment block Message
import './Home.scss'

const Home = () => {
    //const date = new Date(2020,11,4);
    //const date2 = new Date(2020,11,1);
    return (
        <section className='home'>
            <div className="dialogs">
                <DialogItem />
            </div>
            {/* <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                text='Hello' 
                date={date} 
                attachment ={[
                    {
                        id:1,
                        fileName:"file1",
                        url:"https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id:2,
                        fileName:"file2",
                        url:"https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id:3,
                        fileName:"file3",
                        url:"https://source.unsplash.com/100x100/?random=2&nature,water"
                    }
                   
                ]}
                />
                <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                text='📢 О чём данный курс?
                Как разработать свой чат на ReactJS, Redux + NodeJS, Socket.IO, MongoDB. Сделаем полноценный чат с возможностью загрузки фотографий, отправки аудиосообщений как в Telegram, VK, отправка Emoji (смайлов). Также со списком диалогов и поиска пользователей по E-Mail или имени.' 
                date={date2}
                
                />
                <Message 
                avatar='https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg' 
                text='Free for personal and commercial purpose with attribution. More info' 
                date={date}
                isMe={true}
                isRead={true} 
                attachment ={[
                    {
                        id:1,
                        fileName:"file1",
                        url:"https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id:2,
                        fileName:"file2",
                        url:"https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id:3,
                        fileName:"file3",
                        url:"https://source.unsplash.com/100x100/?random=2&nature,water"
                    }
                   
                ]}/>
                 <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                attachment ={[
                    {
                        id:1,
                        fileName:"file1",
                        url:"https://source.unsplash.com/100x100/?random=1&nature,water"
                    }
                   
                ]}
                />
                <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 

                isTyping={true}
                /> */}
                
        </section>
    )
}

export default Home
