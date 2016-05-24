import React, { Component } from 'react';
import MainTablNew from './../components/MainTablNew';
import LeftBlock from './../components/LeftMenu/LeftBlock';
import googleMapInit from './../events/googleMapInit';
import postGetOrders from './../api/postGetOrders';
import postGetMenuCategory from './../api/postGetMenuCategory';
import paths from './../_paths';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.postGetOrders = postGetOrders.bind(this);
    this.postGetMenuCategory = postGetMenuCategory.bind(this);
    this.state = {
      orders: [],
      category: [],
    };
  }

  componentDidMount() {
    // google.maps.event.addDomListener(window, 'load', googleMapInit);
    // this.postGetOrders(paths.main);
    this.postGetMenuCategory(paths.menuCategory, 2728);
  }

  render() {
    return (
      <div className='layout'>
        <LeftBlock />
        <MainTablNew orders={this.state.orders} category={this.state.category} />
      </div>
    );
  }
}
