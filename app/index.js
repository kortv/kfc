import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Grid from './containers/Grid';
import MakeOrder from './containers/MakeOrder';
import Courier from './containers/Courier';
import Client from './containers/Client';
import OrderDetails from './containers/OrderDetails';
import './SASS/main.sass';
import './SASS/scss.scss';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Grid} />
      <Route path='/order' component={MakeOrder} />
      <Route path='/courier/:courierId' component={Courier} />
      <Route path='/client/:clientId' component={Client} />
      <Route path='/details/:orderId' component={OrderDetails} />
    </Route>
  </Router>
), document.getElementById('app'));
