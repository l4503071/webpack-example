import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/home/index';

export default () => [
  <Route path="/" componet={Home} exact />,
];
