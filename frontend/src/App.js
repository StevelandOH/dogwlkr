import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from '../src/components/Navigation';
import LandingPage from '../src/components/LandingPage';
import ActivitiesDisplayPage from '../src/components/ActivitiesDisplayPage';
import ProfilePage from '../src/components/ProfilePage';
import RouteCreatePage from '../src/components/RouteCreatePage';
import RouteDisplayPage from '../src/components/RouteCreatePage';
import FormPagePet from '../src/components/LandingPage';
import FormPageActivity from '../src/components/LandingPage';
import FormPageLogin from './components/FormPageLogin/index';
import FormPageSignup from './components/FormPageSignup/index';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route path exact="/">
                        <LandingPage />
                    </Route>
                    <Route path="/login">
                        <FormPageLogin />
                    </Route>
                    <Route path="/signup">
                        <FormPageSignup />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
