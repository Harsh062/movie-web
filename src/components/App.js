import './App.css';
import React, { Fragment , Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from './state/stores/createAppStore';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <Provider store={createAppStore()}>
        <Fragment>
        <AppRouter />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
