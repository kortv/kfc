import React, { Component } from 'react';
import TablOrders from './../components/Grid/TablOrders';
import ModalMap from './../components/Courier/ModalMap';

import postGetOrders from './../api/postGetOrders';
import paths from './../_paths';

export default class Courier extends Component {
  constructor(props) {
    super(props);

    this.postGetOrders = postGetOrders.bind(this);

    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.postGetOrders(paths.main);
  }

  render() {
    return (
      <div className='table-container'>
        <ModalMap mapHeight={{ height: '340px' }} />
        <TablOrders
          orders={this.state.orders}
        />
      </div>
    );
  }
}
