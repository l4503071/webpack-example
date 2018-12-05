import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './views/index';

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>, document.getElementById('app'),
  );
};
render(App);
