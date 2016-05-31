import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Grid from './containers/Grid';
import MakeOrder from './containers/MakeOrder';
import Currier from './containers/Currier';
import './SASS/main.sass';
import './SASS/scss.scss';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Grid} />
      <Route path='/order' component={MakeOrder} />
      <Route path='/currier/:currierId' component={Currier} />
    </Route>
  </Router>
), document.getElementById('app'));
