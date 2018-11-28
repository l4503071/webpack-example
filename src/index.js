import React from 'react'
import ReactDOM from 'react-dom'

import App from './index.jsx'

const render = (Component) => {
  return ReactDOM.render(<Component/>, document.getElementById('app'))
}

render(App);