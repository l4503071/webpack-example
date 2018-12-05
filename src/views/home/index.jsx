import React from 'react';
import {
  observer,
  inject,
} from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../../store/app-state';

@inject('appState')
@observer
class Home extends React.Component {
  static displayName = 'home'

  constructor(props) {
    super(props);
    this.state = {
      msg: '12',
    };
  }

  render() {
    const { msg } = this.state;
    const { appState } = this.props;
    const { count } = appState;
    return (
      <div>
        <h1>h1</h1>
        <h2>{msg}</h2>
        {
          count
        }
      </div>
    );
  }
}
Home.propTypes = {
  appState: PropTypes.instanceOf(AppState),
};
export default Home;
