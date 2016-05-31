import React, { Component } from 'react';
import TablOrders from './../components/Grid/TablOrders';
import ModalMap from './../components/Currier/ModalMap';

import postGetOrders from './../api/postGetOrders';
import paths from './../_paths';

export default class Currier extends Component {
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
        <ModalMap />
        <TablOrders
          orders={this.state.orders}
        />
      </div>
    );
  }
}
