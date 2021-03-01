import './Landing.css';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandingPage() {
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) return <Redirect to="/profile" />;

    return (
        <div className="landing-page">
            <h1 className="landing">The #1 app for pets and pet owners</h1>
            <div className="button-container">
                <div className="linkdin-link-container">
                    <button
                        className="landing-button"
                        type="button"
                        onClick={() =>
                            (window.location.href =
                                'https://www.linkedin.com/in/stephen1010/')
                        }
                    >
                        Checkout my Linkedin
                    </button>
                </div>
                <div>
                    <button
                        className="landing-button"
                        type="button"
                        onClick={() =>
                            (window.location.href =
                                'https://github.com/StevelandOH')
                        }
                    >
                        Checkout my GitHub
                    </button>
                </div>
                <div>
                    <p className="line">__________</p>
                    <p className="under-line">or</p>
                </div>
                <div className="signup-with-email-container">
                    <button
                        className="landing-button"
                        onClick={() => history.push('/signup')}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="member">
                    Already a Member?
                    <NavLink to="/login">Log In</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
