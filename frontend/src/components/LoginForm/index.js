import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css';

function FormPageLogin({}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="header-container">
                    <h1>Log In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className="email-container">
                        <label className="email-label">
                            ... or log in with username
                        </label>
                        <input
                            placeholder="Your Email"
                            className="email-input"
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password-container">
                        <input
                            className="password-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button className="login-button" type="submit">
                        Log In
                    </button>
                </form>
                <div className="not-a-memeber-div">
                    {'Not a Member?  '}
                    <NavLink className="login-navlink" to="/signup">
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default FormPageLogin;
