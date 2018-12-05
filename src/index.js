import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './views/index';
import appState from './store/app-state';

const render = (Component) => {
  ReactDOM.render(
    <Provider appState={appState}>
      <Router>
        <Component />
      </Router>
    </Provider>, document.getElementById('app'),
  );
};
render(App);
