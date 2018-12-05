import React from 'react';

export default class Home extends React.Component {
  static displayName = 'home'

  constructor(props) {
    super(props);
    this.state = {
      msg: '12',
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>h1</h1>
        <h2>{msg}</h2>
      </div>
    );
  }
}
