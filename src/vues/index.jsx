import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

export default hot(module)(class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '123431011',
      count: 1,
    }
  }

  componentDidMount() {
    this.change('00125666')
  }

  change(msg) {
    this.setState({
      msg,
    });
  }

  add() {
    this.setState((state) => { // eslint-disable-line
      return {
        count: state.count + 1,
      }
    });
  }

  render() {
    const { msg, count } = this.state;
    const { add } = this;
    return (
      <div>
        <h1>h12</h1>
        <h2>
          {
            msg
          }
        </h2>
        <h4>
          {
            count
          }
        </h4>
        <button type="button" onClick={add.bind(this)}>add</button>
      </div>
    )
  }
})
