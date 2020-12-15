import React from 'react'
import { Form, Input,Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Block, Button } from 'components'
import './Auth.scss'

const Auth = () => {
    return (
        <section className='auth'>
            <div className="auth__content">
                <div className="auth__top">
                   <h2>Войти в аккаунт</h2>
                   <p>пожалуйста, войдите в свой аккаунт
                   </p>
                </div>
                <Block>
                        
                        
                        <Button type="primary" className="button__large" size="large">
                            This is button
                        </Button>
                    </Block>
            </div>
        </section>
    )
}

export default Auth
