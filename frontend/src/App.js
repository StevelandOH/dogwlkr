import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from '../src/components/Navigation';
import Landing from '../src/components/Landing';
import Activities from '../src/components/Activities';
import Profile from '../src/components/Profile';
import CreateRoute from '../src/components/CreateRoute';
import RoutePage from './components/RoutePage';
import PetForm from '../src/components/PetForm';
import ActivityForm from '../src/components/ActivityForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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
                        <Landing />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/signup">
                        <SignupForm />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/new/pet">
                        <PetForm />
                    </Route>
                    <Route path="/activities">
                        <Activities />
                    </Route>
                    <Route path="/new/activity">
                        <ActivityForm />
                    </Route>
                    <Route path="/route/:routeId">
                        <RoutePage />
                    </Route>
                    <Route path="/new/route">
                        <CreateRoute />
                    </Route>
                    <Route>Page Not Found</Route>
                </Switch>
            )}
        </>
    );
}

export default App;
