import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import { Block, Button } from 'components'
import PropTypes from 'prop-types';

const LoginForm = props=> {


    
        const success = true
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
        }=props
        
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>пожалуйста, войдите в свой аккаунт
                   </p>
                </div>
                <Block>
    
                    {success ? <Form onSubmit={handleSubmit}
                        name="normal_login"
                        className="login-form"
                       
    
                    >
                        
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
                            allowClear
                            help={!touched.password  ? null : errors.password }
                        >
                            <Input.Password
                                id='password'
                                size='large'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Пароль"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                
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
    


    LoginForm.propTypes={
        values:PropTypes.any,
        errors:PropTypes.any,
        touched: PropTypes.any,
        handleBlur: PropTypes.any,
        handleChange: PropTypes.any,
        handleSubmit: PropTypes.any
    }
    

   


export default LoginForm
