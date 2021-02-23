import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './FormPageSignup.css';
import { createUser } from '../../store/session';

function FormPageSignup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const addUsername = (e) => setUsername(e.target.value);
    const addEmail = (e) => setEmail(e.target.value);
    const addPassword = (e) => setPassword(e.target.value);
    const addConfirmPassword = (e) => setConfirmPassword(e.target.value);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = [];
        dispatch(createUser({ username, email, password, image }))
            .then(() => {
                setUsername('');
                setEmail('');
                setPassword('');
                setImage(null);
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    newErrors = data.errors;
                    setErrors(newErrors);
                }
            });

        // if (password === confirmPassword) {
        //     return dispatch(
        //         sessionActions.signup({ username, password, email })
        //     ).catch(async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     });
        // }
        // return setErrors([
        //     "It's just a password confirmation, not a second password.  Let's try and make sure they match this time.",
        // ]);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className="signup-email-container">
                        <label>Email</label>
                        <div className="signup-email-input">
                            <input
                                type="email"
                                value={email}
                                onChange={addEmail}
                                required
                            />
                        </div>
                    </div>
                    <div className="signup-username-container">
                        <label>Username</label>
                        <div className="signup-username-input">
                            <input
                                type="text"
                                value={username}
                                onChange={addUsername}
                                required
                            />
                        </div>
                    </div>
                    <div className="signup-password-container">
                        <label>Password</label>
                        <div className="signup-password-input">
                            <input
                                type="password"
                                value={password}
                                onChange={addPassword}
                                required
                            />
                        </div>
                    </div>
                    <div className="signup-confirm-password-container">
                        <label>Confirm Password</label>
                        <div className="signup-confirm-password-input">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={addConfirmPassword}
                                required
                            />
                        </div>
                    </div>
                    <div className="signup-add-image-container">
                        <label>Add an image</label>
                        <div className="signup-add-image-input">
                            <input type="file" onChange={updateFile} />
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default FormPageSignup;
