import React, { Component } from 'react';
import MainTablNew from './../components/MainTablNew';
import LeftBlock from './../components/LeftMenu/LeftBlock';

import googleMapInit from './../events/googleMapInit';
import menuOne from './../events/menuOne';

import postGetOrders from './../api/postGetOrders';
import postGetMenuCategory from './../api/postGetMenuCategory';
import paths from './../_paths';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.menuOne = menuOne.bind(this);

    this.postGetOrders = postGetOrders.bind(this);
    this.postGetMenuCategory = postGetMenuCategory.bind(this);

    this.state = {
      orders: [],
      category: [],
      restaurantId: 2995,
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
        <MainTablNew
        orders={this.state.orders} category={this.state.category}
        menuOne={this.menuOne}
        />
      </div>
    );
  }
}
