import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './routes/Root'
import configureStore from './redux/configureStore'
import createHistory from "history/createBrowserHistory";
const history = createHistory();

const store = configureStore(history)
// import registerServiceWorker from './registerServiceWorker';

render(
    <Root store={store} history={history} />
    ,
    document.getElementById('root'));
// registerServiceWorker();
