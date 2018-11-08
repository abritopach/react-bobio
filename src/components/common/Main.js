import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PassengerCardContainer from '../../components/PassengerCardContainer';
import NewCollectionComponent from '../../components/NewCollectionComponent';

const Main = () => (
    <Switch>
        <Route exact path='/' component={PassengerCardContainer}/>
        <Route exact path='/new' component={NewCollectionComponent}/>
    </Switch>
);

export default Main;