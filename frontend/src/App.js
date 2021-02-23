import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from '../src/components/Navigation';
import LandingPage from '../src/components/LandingPage';
import ActivitiesDisplayPage from '../src/components/ActivitiesDisplayPage';
import ProfilePage from '../src/components/ProfilePage';
import RouteCreatePage from '../src/components/RouteCreatePage';
import RouteDisplayPage from '../src/components/RouteDisplayPage';
import FormPagePet from '../src/components/FormPagePet';
import FormPageActivity from '../src/components/FormPageActivity';
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
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/login">
                        <FormPageLogin />
                    </Route>
                    <Route path="/signup">
                        <FormPageSignup />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/pets/create">
                        <FormPagePet />
                    </Route>
                    <Route exact path="/activities">
                        <ActivitiesDisplayPage />
                    </Route>
                    <Route path="/activities/create">
                        <FormPageActivity />
                    </Route>
                    <Route exact path="/routes/id">
                        <RouteDisplayPage />
                    </Route>
                    <Route exact path="/routes/create">
                        <RouteCreatePage />
                    </Route>
                    <Route>Page Not Found</Route>
                </Switch>
            )}
        </>
    );
}

export default App;
