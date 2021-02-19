import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupFormPage.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const addUsername = (e) => setUsername(e.target.value);
    const addEmail = (e) => setEmail(e.target.value);
    const addPassword = (e) => setPassword(e.target.value);
    const addConfirmPassword = (e) => setConfirmPassword(e.target.value);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            return dispatch(
                sessionActions.signup({ username, password, email })
            ).catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors([
            "It's just a password confirmation, not a second password.  Let's try and make sure they match this time.",
        ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Email
                <input
                    type="email"
                    value={email}
                    onChange={addEmail}
                    required
                />
            </label>
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={addUsername}
                    required
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={addPassword}
                    required
                />
            </label>
            <label>
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={addConfirmPassword}
                    required
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
}
export default SignupFormPage;
