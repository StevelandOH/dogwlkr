import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import './SignupForm.css';
import { createUser } from '../../store/session';

function FormPageSignup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const addUsername = (e) => setUsername(e.target.value);
    const addEmail = (e) => setEmail(e.target.value);

    const addPassword = (e) => setPassword(e.target.value);
    const addConfirmPassword = (e) => setConfirmPassword(e.target.value);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createUser({ username, password, email }));

        history.push('/profile');
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username, email, password);
    //     let newErrors = [];
    //     dispatch(createUser({ username, email, password }))
    //         .then(() => {
    //             setUsername('');
    //             setEmail('');
    //             setPassword('');
    //         })
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) {
    //                 newErrors = data.errors;
    //                 setErrors(newErrors);
    //             }
    //         });
    // };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-header-container">
                    <h1>Join Dogwlkr today, it's Free.</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className="signup-email-container">
                        <input
                            className="signup-email-input"
                            type="email"
                            value={email}
                            onChange={addEmail}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="signup-username-container">
                        <input
                            className="signup-username-input"
                            type="text"
                            value={username}
                            onChange={addUsername}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="signup-password-container">
                        <input
                            className="signup-password-input"
                            type="password"
                            value={password}
                            onChange={addPassword}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="signup-confirm-password-container">
                        <input
                            className="signup-confirm-password-input"
                            type="password"
                            value={confirmPassword}
                            onChange={addConfirmPassword}
                            placeholder="Password"
                            required
                        />
                        {/* <div className="add-file-on-signup">
                            <input
                                className="add-file-input-signup"
                                type="file"
                                value={image}
                                onChange={addImage}
                            />
                        </div> */}
                    </div>

                    <button className="submit-signup-button" type="submit">
                        Sign Up
                    </button>
                </form>
                <div className="already-memeber-div">
                    {'Already a Member?  '}
                    <NavLink className="login-navlink" to="/login">
                        Log In
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default FormPageSignup;
