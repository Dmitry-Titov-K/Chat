import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import { Block, Button } from 'components'


const LoginForm = () => {

    return (
        <div>
            <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>пожалуйста, войдите в свой аккаунт
                   </p>
                </div>
                <Block>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <Form.Item
                            name="username"
                            hasFeedback
                            
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                            <Button type="primary" size='large'  htmlType="submit" >
                                Войти в аккаунт
                            </Button>

                        </Form.Item>
                        <Form.Item>
                            <NavLink to='/register' className="auth__register-link">Зарегистрироваться</NavLink>
                        </Form.Item>
                    </Form>

                </Block>
        </div>
            
    )
}

export default LoginForm
