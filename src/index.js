/*
*   Description: Set redux and render application.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Bootstrap resource
import './resources/bootstrap/bootstrap.min.css';
// CSS files
import './resources/css/index.css';
// Imports for redux and redux-thunk
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/reducers/combineReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Redux store
const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
