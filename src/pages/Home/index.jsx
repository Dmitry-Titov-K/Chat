import React from 'react'
import { Dialogs,Message } from 'components' // add Message, Dialogs and undcomment block Message
import './Home.scss'
import { TeamOutlined, FormOutlined, EllipsisOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
//import audioMp3 from 'assets/sound/audio.mp3'

const Home = () => {
    const date = new Date(2020, 11, 4);
     const date2 = new Date(2020, 11, 1);
    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined width={33} height={33}/>
                            <span>Список диологов</span>
                        </div>
                        <FormOutlined />
                    </div>
                    <div className="chat__sidebar-search">
                        <Input
                            placeholder="Поиск по контактам"
                            prefix={<SearchOutlined />}
                            onSearch={values => console.log(values)}
                        />
                    </div>
                    <Dialogs
                        items={[
                            {
                                _id: "02f10ea97600067dd9811d233e83a150",
                                text: "Созданные элементы по умолчанию inline-элементы, поэтому при указании",
                                isRead: false,
                                create_at: new Date(2021, 0, 2, 14, 39, 1),
                                user: {
                                    _id: "02f10ea97600067dd9811d233e83a150",
                                    fullname: 'Самович Антон',
                                    firstName: 'Антон',
                                    secondName: 'Самович',
                                    avatar: null,
                                    isOnline: false
                                },
                            },
                            {
                                _id: "827ccb0eea8a706c4c34a16891f84e7b",
                                text: "Вердикт: подождем, когда система заработает полностью, пока она «крутится» в тестовом режиме, то и дело выдает ошибки.",
                                isRead: true,
                                create_at: new Date(2021, 0, 1, 11, 32, 1),
                                user: {
                                    _id: "827ccb0eea8a706c4c34a16891f84e7b",
                                    fullname: 'Влад Рабочий',
                                    firstName: 'Влад',
                                    secondName: 'Рабочий',
                                    //avatar: "https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg",
                                    isOnline: true
                                },
                            },
                            {
                                _id: "7815696ecbf1c96e6894b779456d330e",
                                text: "Вердикт: подождем, когда система заработает полностью, пока она «крутится» в тестовом режиме, то и дело выдает ошибки.",
                                isRead: false,
                                create_at: new Date(2021, 0, 1, 11, 32, 1),
                                user: {
                                    _id: "7815696ecbf1c96e6894b779456d330e",
                                    fullname: 'Сергей Альбертов',
                                    firstName: 'Сергей',
                                    secondName: 'Альбертов',
                                    //avatar: "https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg",
                                    isOnline: true
                                },
                            }
                        ]}
                    />
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div></div>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-fullname">Влад Рабочий</b>
                            <div className="chat__dialog-header-status">
                                <div className="status status--isOnline">online</div>
                            </div>
                            
                        </div>
                        <div className="chat__dialog-header-right">
                                <EllipsisOutlined style={{fontSize:'24px', opacity:'0.7'}}/>
                                </div>
                    </div>
                    <div className="chat__dialog-messages">
                    <Message
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
                date={date}
            /><Message
            avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
            date={date}
            audio={"https://notificationsounds.com/storage/sounds/file-sounds-1097-long-expected.mp3"}

        />
                </div>
                </div>
                
            </div>
            {/*  <Dialogs
                items={[
                    {
                        _id: "dgte243sda1123421d52",
                        text: "Созданные элементы по умолчанию inline-элементы, поэтому при указании",
                        isRead: false,
                        create_at: new Date(2021, 0, 2, 14, 39, 1),
                        user: {
                            _id: "7ddd4e549b62bfeb0fe27bdcc66988d8",
                            fullname: 'Самович Антон',
                            firstName: 'Антон',
                            secondName: 'Самович',
                            avatar: null,
                            isOnline: false
                        },
                    },
                    {
                        _id: "da12asda1123421d52",
                        text: "Вердикт: подождем, когда система заработает полностью, пока она «крутится» в тестовом режиме, то и дело выдает ошибки.",
                        isRead: true,
                        create_at: new Date(2021, 0, 1, 11, 32, 1),
                        user: {
                            _id: "da123sda1123421d52",
                            fullname: 'Влад Рабочий',
                            firstName: 'Влад',
                            secondName: 'Рабочий',
                            //avatar: "https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg",
                            isOnline: true
                        },
                    }
                ]}
            /> */}
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

            {/*  <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
                isTyping={true}
            />
            <Message
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg'
                date={date}
                audio={"https://notificationsounds.com/storage/sounds/file-sounds-1097-long-expected.mp3"}

            />*/}

        </section>
    )
}

export default Home
