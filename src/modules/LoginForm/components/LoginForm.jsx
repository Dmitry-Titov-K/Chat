import React from 'react'
import { Form, Input } from 'antd';
import { LockOutlined,MailOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import { Block, Button } from 'components'
import PropTypes from 'prop-types';

const LoginForm = props=> {

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
    
                    <Form onSubmit={handleSubmit}
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                        name="email"
                        validateStatus={!touched.email  ? '' : errors.email ? "error":"success"}
                        hasFeedback 
                        help={!touched.email  ? null : errors.email }
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
                                Войти в аккаунт
                                </Button>
                        </Form.Item>
                        <Form.Item>
                            <NavLink to='/register' className="auth__register-link">Зарегестрироваться</NavLink>
                        </Form.Item>
                    </Form>
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
