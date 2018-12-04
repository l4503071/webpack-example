import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/index.jsx' // eslint-disable-line

const render = (Component) => { ReactDOM.render(<Component />, document.getElementById('app')) } // eslint-disable-line
render(App);
