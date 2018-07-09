import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import GamePage from "../views/GamePage";
import Home from "../views/Home";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Home} exact />
                <Route path="/game" component={GamePage} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
