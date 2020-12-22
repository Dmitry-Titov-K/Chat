import React from 'react'
import { Message } from 'components'
import './Home.scss'

const Home = () => {

    return (
        <section className='home'>
            <Message 
                avatar='https://www.flaticon.com/svg/static/icons/svg/3930/3930551.svg' 
                text='Как разработать свой чат на ReactJS, Redux + NodeJS, Socket.IO, MongoDB.' 
                date='Tue Dec 22 2020 13:38:57 GMT+0300' />
        </section>
    )
}

export default Home
