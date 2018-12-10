import React from 'react';
import {
  observer,
  inject,
} from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../../store/app-state';
import './style.css';
import img from './test.png';
import home from './home.png';
import homeLow from './home-low.jpg';

require('lazysizes');
require('lazysizes/plugins/blur-up/ls.blur-up');

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
        <img src={img} alt="test" />
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
        <h1>7</h1>
        <h1>8</h1>
        <h1>9</h1>
        <h1>10</h1>
        <h1>11</h1>
        <h1>12</h1>
        <h1>13</h1>
        <h1>14</h1>
        <h1>15</h1>
        <h1>16</h1>
        <h1>17</h1>
        <h1>18</h1>
        <h1>19</h1>
        <h1>20</h1>
        <img data-src={home} src={homeLow} className="lazyload blur-up" alt="test" />
      </div>
    );
  }
}
Home.wrappedComponent.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
};
export default Home;
