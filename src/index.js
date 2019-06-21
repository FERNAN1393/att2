/*
*   Description: Set redux and render application.
*/
import './resources/bootstrap/bootstrap.min.css';
import './themes/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename='/'>
            <Route component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

