import './App.css';
import React, { Fragment , Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createAppStore } from './state/stores/createAppStore';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <Provider store={createAppStore()}>
        <BrowserRouter>
          <Fragment>
            <AppRouter />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
