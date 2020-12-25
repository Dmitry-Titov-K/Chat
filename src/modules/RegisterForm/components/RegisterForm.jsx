import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { Block, Button } from 'components'


const RegisterForm = props => {
    const success = true
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    }=props
    console.log(errors.email)
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>для входа в чат, вам нужно зарегестрироваться
                   </p>
            </div>
            <Block>

                {success ? <Form onSubmit={handleSubmit}
                    name="normal_login"
                    className="login-form"
                   

                >
                    <Form.Item
                        
                        name="email"
                        validateStatus={!touched.email  ? '' : errors.email ? "error":"success"}
                        hasFeedback 
                    >
                        <Input 
                        id="email"
                        size='large' 
                        prefix={<MailOutlined className="site-form-item-icon" />} 
                        placeholder="E-mail" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        
                        hasFeedback  
                    >
                        <Input size='large' 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Ваше имя" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus={!touched.password  ? '' : errors.password ? "error":"success"}
                        hasFeedback
                    >
                        <Input
                            id='password'
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            help={errors.password}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password2"
                        
                        hasFeedback
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Подтвердите пароль"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" size='large' htmlType="submit" >
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

RegisterForm.propTypes={
    values:PropTypes.any,
    errors:PropTypes.any,
    touched: PropTypes.any,
    handleBlur: PropTypes.any,
    handleChange: PropTypes.any,
    handleSubmit: PropTypes.any
}

export default RegisterForm
