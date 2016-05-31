import React, { Component } from 'react';
import TablOrders from './../components/Grid/TablOrders';

import postGetOrders from './../api/postGetOrders';
import paths from './../_paths';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.postGetOrders = postGetOrders.bind(this);

    this.state = {
      orders: [],
      category: [],
      productList: [],
      restaurantId: 2995,
      screen: 'MakeOrder',
      basket: {},
      showMap: false,
      cityList: [],
    };
  }

  componentDidMount() {
    this.postGetOrders(paths.main);
  }

  render() {
    return (
      <div className='table-container'>
        <TablOrders
          orders={this.state.orders}
        />
      </div>
    );
  }
}
