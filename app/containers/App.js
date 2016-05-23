import React, { Component } from 'react';
import MainTablNew from './../components/MainTablNew';
import LeftBlock from './../components/LeftMenu/LeftBlock';
import googleMapInit from './../events/googleMapInit';
import postGetOrders from './../api/postGetOrders';
import paths from './../_paths';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.postGetOrders = postGetOrders.bind(this);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    google.maps.event.addDomListener(window, 'load', googleMapInit);
    this.postGetOrders(paths.main);
  }

  render() {
    return (
      <div className='layout'>
        <LeftBlock />
        <MainTablNew orders={this.state.orders} />
      </div>
    );
  }
}
