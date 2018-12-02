import React from 'react'
import ReactDOM from 'react-dom'
import App from './index.jsx'

const render = (Component) => { ReactDOM.render(<Component />, document.getElementById('app')) } // eslint-disable-line
render(App);
