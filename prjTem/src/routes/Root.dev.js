import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

import { Router, Route, Switch } from 'react-router'

import GamePage from "../views/GamePage";
import Home from "../views/Home";

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history} >
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/game" component={GamePage} />
                <DevTools />
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
