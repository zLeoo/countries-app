import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Country from '../pages/Country';
import Home from './../pages/Home/';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/country/:code" component={Country}/>
        </Switch>
    );
};

export default Routes;