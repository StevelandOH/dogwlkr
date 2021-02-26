import './Landing.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();

    return (
        <div className="landing-page">
            <h1 className="landing">The #1 app for pets and pet owners</h1>
            <div className="landing-page-container">
                <div className="signup-with-email-container">
                    <button
                        onClick={() => history.push('/signup')}
                        className="signup-with-email"
                    >
                        Use my email
                    </button>
                </div>
                <div>
                    Already a Member?
                    <NavLink to="/login">Log In</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
