import { motion } from "framer-motion";
import React, { useState } from 'react';
import { API_URL } from '../../config/index.js';
import "./Login.scss"

const Login = () => {
    const [isSignup, setIsSignup] = useState(true);
    console.log(API_URL)

    const resetInputField = () => {
        document.getElementById('form').reset();
      };

        const stateToggle = (e) => {
            e.preventDefault();
            setIsSignup(!isSignup);
    };     

  return (
    <motion.section className="login">
        <h1 className="login__title">{isSignup ? 'Create User' : 'Login'}</h1>
        <form id="form" className="login__form">
            <h5 className="login__subtitle">USER NAME</h5>
            <input type="text" placeholder="Enter name" className="login__input" name="name" required></input>
            <h5 className="login__subtitle">PASSWORD</h5>
            <input type="password" placeholder="Enter password" className="login__input" name="password" required></input>
            {isSignup && (<>
                <h5 className="login__subtitle">CONFIRM PASSWORD</h5>
                <input type="password" placeholder="Enter password" className="login__input" name="confirmPassword" required></input>
                <h5 className="login__subtitle">EMAIL</h5>
                <input type="email" placeholder="Enter password" className="login__input" name="email" required></input>
            </>)}
            <div className="login__button-box">
                <button type="button" onClick={resetInputField} className="login__button">CLEAR</button>
                <button type="submit" onClick={stateToggle} className="login__button">{isSignup ? 'CREATE' : 'LOGIN'}</button>
            </div>
        </form>
    </motion.section>
  )
}

export default Login