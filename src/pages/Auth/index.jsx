import React from 'react'
import {LoginForm} from 'module'
import {Route} from 'react-router-dom'
import './Auth.scss'

const Auth = () => {

    return (
        <section className='auth'>
            <div className="auth__content">
               <Route exact path='/login' component={LoginForm}/> 
               <Route path ='/register' render={()=><h1>Hello</h1>}/>
            </div>
        </section>
    )
}

export default Auth
