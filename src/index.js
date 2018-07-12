import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createAppStore } from './state/stores/createAppStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createAppStore()}>
        <BrowserRouter>
            <Fragment>
                <Route path="/" component={App} />
            </Fragment>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
