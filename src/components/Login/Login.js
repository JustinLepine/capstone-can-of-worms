import { motion } from "framer-motion";
import React, { useState } from 'react';
import "./Login.scss"

const Login = () => {
    // const [isSignup, _setIsSignup] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    console.log(isSignup)

    const resetInputField = () => {
        document.getElementById('form').reset();
      };

        const stateToggle = (e) => {
            e.preventDefault();
            setIsSignup(!isSignup);
    };
      

  return (
    <motion.section className="login">
        {isSignup ? <h1 className="login__title">Create User</h1> : <h1 className="login__title">Login</h1>}
        <form id="form" className="login__form">
            <h5 className="login__subtitle">USER NAME</h5>
            <input className="login__input" name="inputName"></input>
            <h5 className="login__subtitle">PASSWORD</h5>
            <input className="login__input" name="inputName"></input>
            {isSignup && (
                <>
                    <h5 className="login__subtitle">EMAIL</h5>
                    <input className="login__input" name="inputName"></input>
                </>                
            )}

            <div className="login__button-box">
                <button type="button" onClick={resetInputField} className="login__button">RESET</button>
                <button 
                // type="submit"
                 onClick={stateToggle} className="login__button">ADD</button>
            </div>
        </form>


    </motion.section>
  )
}

export default Login