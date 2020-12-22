import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { Block, Button } from 'components'


const RegisterForm = () => {
    const success = false
    return (
        <div>
            <div className="auth__top">
                <h2>Решистрация</h2>
                <p>для входа в чат, вам нужно зарегестрироваться
                   </p>
            </div>
            <Block>

                {success ? <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}

                >
                    <Form.Item
                        name="email"
                        hasFeedback

                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        hasFeedback

                        rules={[
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" size='large' htmlType="submit" >
                            Зарегистрироваться
                            </Button>

                    </Form.Item>
                    <Form.Item>
                        <NavLink to='/login' className="auth__register-link">Войти в аккаунт</NavLink>
                    </Form.Item>
                </Form> : <div className='auth__success-block'>

                        <div><InfoCircleTwoTone/> </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено писмо с ссылкой на подтверждение аккаунта</p>
                    </div>
                }
            </Block>
        </div>

    )
}

export default RegisterForm
