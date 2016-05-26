import React, { Component } from 'react';
import MainScreen from './../components/MainScreen';
import LeftBlock from './../components/LeftMenu/LeftBlock';

// import googleMapInit from './../events/googleMapInit';
import menuOne from './../events/menuOne';
import onCount from './../events/onCount';

import postOrderBasket from './../api/postOrderBasket';
import postGetOrders from './../api/postGetOrders';
import postGetMenuCategory from './../api/postGetMenuCategory';
import paths from './../_paths';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.menuOne = menuOne.bind(this);
    this.onCount = onCount.bind(this);

    this.postOrderBasket = postOrderBasket.bind(this);
    this.postGetOrders = postGetOrders.bind(this);
    this.postGetMenuCategory = postGetMenuCategory.bind(this);

    this.state = {
      orders: [],
      category: [],
      productList: [],
      restaurantId: 2995,
      screen: 'TablOrders',
      basket: {},
    };
  }

  componentDidMount() {
    // google.maps.event.addDomListener(window, 'load', googleMapInit);
    this.postGetOrders(paths.main);
    this.postGetMenuCategory(paths.menuCategory, 2728);
  }

  render() {
    return (
      <div className='layout'>
        <LeftBlock onMakeOrder={() => { this.setState({ screen: 'MakeOrder' }); }} />
        <MainScreen
        orders={this.state.orders} category={this.state.category}
        menuOne={this.menuOne} screen={this.state.screen} basket={this.state.basket}
        productList={this.state.productList} onCount={this.onCount}
        onClose={() => { this.setState({ screen: 'TablOrders' }); }}
        postOrderBasket={this.postOrderBasket}
        />
      </div>
    );
  }
}
