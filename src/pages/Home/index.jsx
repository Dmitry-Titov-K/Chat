import React from 'react'
import { Message, Dialogs } from 'components' // add Message, Dialogs and undcomment block Message
import './Home.scss'



const Home = () => {
    const date = new Date(2020, 11, 4);
    // const date2 = new Date(2020, 11, 1);
    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">

                    </div>
                </div>
                <div className="chat__dialog">

                </div>
            </div>
            <Dialogs
                items={[
                    {
                        _id: Math.random(),
                        text: "Созданные элементы по умолчанию inline-элементы, поэтому при указании",
                        isRead: false,
                        create_at: new Date(2021, 0, 2, 14, 39, 1),
                        user: {
                            _id: 1,
                            fullname: 'Самович Антон',
                            avatar: null,
                            isOnline: false
                        },
                    },
                    {
                        _id: Math.random(),
                        text: "Вердикт: подождем, когда система заработает полностью, пока она «крутится» в тестовом режиме, то и дело выдает ошибки.",
                        isRead: true,
                        create_at: new Date(2021, 0, 1, 11, 32, 1),
                        user: {
                            _id: 1,
                            fullname: 'Влад Рабочий',
                            avatar: "https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg",
                            isOnline: true
                        },
                    }
                ]}
            />
            {/*  <DialogItem user={{
                fullname: "Антон Самович",
                isOnline: true
            }}
                unread={0} />
            <DialogItem user={{
                fullname: "Сан Саныч",
                isOnline: false
            }}
                unread={4} />
            <DialogItem user={{
                fullname: "Антон Самович",
                isOnline: true
            }}
                unread={12} /> */}

            {/* <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
                text='Hello'
                date={date}
                attachment={[
                    {
                        id: 1,
                        fileName: "file1",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id: 2,
                        fileName: "file2",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id: 3,
                        fileName: "file3",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
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
                attachment={[
                    {
                        id: 1,
                        fileName: "file1",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id: 2,
                        fileName: "file2",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id: 3,
                        fileName: "file3",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    }

                ]} />
            <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
                attachment={[
                    {
                        id: 1,
                        fileName: "file1",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    }

                ]}
            /> */}

            <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'

                isTyping={true}
            />
            <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
                date={date}
                audio={"asd"}

            />

        </section>
    )
}

export default Home
