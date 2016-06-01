import React, { Component } from 'react';
import TablOrders from './../components/Grid/TablOrders';
import ClientHeader from './../components/Client/ClientHeader';

import postGetOrders from './../api/postGetOrders';
import paths from './../_paths';

export default class Client extends Component {
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
        <ClientHeader />
        <TablOrders
          orders={this.state.orders}
        />
      </div>
    );
  }
}
