import React, { Component } from 'react';
import ProductList from './../components/MakeOrder/ProductList';

import menuOne from './../events/menuOne';
import onCount from './../events/onCount';

import postGetCityList from './../api/postGetCityList';
import postGetStreetList from './../api/postGetStreetList';
import postOrderBasket from './../api/postOrderBasket';
import postGetOrders from './../api/postGetOrders';
import postGetMenuCategory from './../api/postGetMenuCategory';
import paths from './../_paths';

export default class MakeOrder extends Component {
  constructor(props) {
    super(props);

    this.menuOne = menuOne.bind(this);
    this.onCount = onCount.bind(this);

    this.postGetStreetList = postGetStreetList.bind(this);
    this.postGetCityList = postGetCityList.bind(this);
    this.postOrderBasket = postOrderBasket.bind(this);
    this.postGetOrders = postGetOrders.bind(this);
    this.postGetMenuCategory = postGetMenuCategory.bind(this);

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
    this.postGetStreetList();
    this.postGetCityList();
    this.postGetOrders(paths.main);
    this.postGetMenuCategory(paths.menuCategory, 2728);
  }

  render() {
    return (
      <ProductList
      klass='modal-open modal-order' category={this.state.category}
      menuOne={this.menuOne} productList={this.state.productList}
      onClose={this.onClose} onCount={this.onCount} basket={this.state.basket}
      postOrderBasket={this.postOrderBasket} allState={this.state}
      />
    );
  }
}
