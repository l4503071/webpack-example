import React from 'react'
import ReactDOM from 'react-dom'
import App from './vues/index.jsx' // eslint-disable-line

const render = (Component) => { ReactDOM.render(<Component />, document.getElementById('app')) } // eslint-disable-line
render(App);
