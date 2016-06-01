import React, { Component } from 'react';
import { Link } from 'react-router';

import ProductList from './../components/MakeOrder/ProductList';
import MenuOrders from './../components/MakeOrder/MenuOrders';
import AddsForm from './../components/MakeOrder/AddsForm';

import handleCategory from './../components/MakeOrder/events/handleCategory';
import onCount from './../components/MakeOrder/events/onCount';
import setRestaurantId from './../components/MakeOrder/events/setRestaurantId';
import setId from './../components/MakeOrder/events/setId';

import postGetHouseList from './../components/MakeOrder/api/postGetHouseList';
import postGetCityList from './../components/MakeOrder/api/postGetCityList';
import postGetStreetList from './../components/MakeOrder/api/postGetStreetList';
import postOrderBasket from './../components/MakeOrder/api/postOrderBasket';
import postGetMenuCategory from './../components/MakeOrder/api/postGetMenuCategory';
import paths from './../_paths';

export default class MakeOrder extends Component {
  constructor(props) {
    super(props);

    this.handleCategory = handleCategory.bind(this);
    this.onCount = onCount.bind(this);
    this.setRestaurantId = setRestaurantId.bind(this);
    this.setId = setId.bind(this);

    this.postGetHouseList = postGetHouseList.bind(this);
    this.postGetStreetList = postGetStreetList.bind(this);
    this.postGetCityList = postGetCityList.bind(this);
    this.postOrderBasket = postOrderBasket.bind(this);
    this.postGetMenuCategory = postGetMenuCategory.bind(this);

    this.state = {
      category: [],
      productList: [],
      restaurantId: 0,
      basket: {},
      cityList: [],
      streetList: [],
      houseList: [],
      cityId: 4,
    };
  }

  componentDidMount() {
    this.postGetMenuCategory(paths.menuCategory, 2728);
    this.postGetCityList();
  }

  render() {
    return (
      <div className='modal-open modal-order'>
        <div className='table-header'>
          <div className='header-tel'>
            <span>+79037339131</span>
          </div>
          <div className='header-name'>Создать новый заказ</div>
          <Link to='/' className='button-close'>
            <div>+</div>
          </Link>
        </div>
        <ProductList
          category={this.state.category}
          handleCategory={this.handleCategory} productList={this.state.productList}
          onClose={this.onClose} onCount={this.onCount} basket={this.state.basket}
          postOrderBasket={this.postOrderBasket}
        >
          <MenuOrders
          postOrderBasket={this.postOrderBasket}
          >
            <AddsForm
              cityList={this.state.cityList}
              streetList={this.state.streetList}
              houseList={this.state.houseList}
              postGetHouseList={this.postGetHouseList}
              setRestaurantId={this.setRestaurantId}
              setId={this.setId} postGetStreetList={this.postGetStreetList}
            />
          </MenuOrders>
        </ProductList>
      </div>
    );
  }
}
