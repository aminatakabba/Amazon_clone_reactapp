import React, { useState } from 'react'
import './Login.css';
import { auth } from './firebase';
import { Link, useHistory } from 'react-router-dom';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        // Firebase authentication
        auth 
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()
        // Firebase authentication
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // is successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://www.asociacionjuanantoniocebrian.com/wp-content/themes/fundacioncebrian/img/logo-amazon.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    {/* email */}
                    {/* password */}
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button 
                        onClick={signIn}
                        type="submit"
                        className="login__signInButton">Sign In</button>

                    <p>
                        By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
                    </p>

                    <button
                        onClick={register} 
                        className="login__registerButton">Create your Amazon Account</button>
                </form>
                
                
            </div>
        </div>
    )
}

export default Login
