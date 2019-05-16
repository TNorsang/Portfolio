import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './containers/home';
import App from './containers/App';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
            
    </Router>
);