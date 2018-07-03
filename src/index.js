import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createAppStore } from './components/state/stores/createAppStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createAppStore()}>
        <BrowserRouter>
            <Fragment>
                <App />
            </Fragment>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
