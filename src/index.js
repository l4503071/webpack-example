import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index';

const render = (Component) => { ReactDOM.render(<Component />, document.getElementById('app')); };
render(App);
