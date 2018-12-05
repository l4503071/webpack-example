import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import Routes from '../config/router';

export default hot(module)(class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {

  }

  add() {
    this.setState((state) => { // eslint-disable-line
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    const { count } = this.state;
    const { add } = this;
    return (
      <div>
        <h4>
          {
            count
          }
        </h4>
        <button type="button" onClick={add.bind(this)}>add</button>
        <Link to="/">切换至home</Link>
        <Routes />
      </div>
    );
  }
});
