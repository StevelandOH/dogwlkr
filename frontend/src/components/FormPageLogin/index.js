import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './FormPageLogin.css';
import background from '../../images/background.JPEG';

function FormPageLogin() {
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
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className="username-container">
                        <label>Username or Email</label>
                        <div className="username-input">
                            <input
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="password-input">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default FormPageLogin;
