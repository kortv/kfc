import React, { Component } from 'react';

import ModalMap from './../components/Courier/ModalMap';
import Details from './../components/OrderDetails/Details';
import DetailsHeader from './../components/OrderDetails/DetailsHeader';

import handleCategory from './../components/MakeOrder/events/handleCategory';
import onCount from './../components/MakeOrder/events/onCount';
import setRestaurantId from './../components/MakeOrder/events/setRestaurantId';

import postGetHouseList from './../components/MakeOrder/api/postGetHouseList';
import postGetCityList from './../components/MakeOrder/api/postGetCityList';
import postGetStreetList from './../components/MakeOrder/api/postGetStreetList';
import postOrderBasket from './../components/MakeOrder/api/postOrderBasket';
import postGetMenuCategory from './../components/MakeOrder/api/postGetMenuCategory';
import paths from './../_paths';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);

    this.handleCategory = handleCategory.bind(this);
    this.onCount = onCount.bind(this);
    this.setRestaurantId = setRestaurantId.bind(this);

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
    this.postGetStreetList();
  }

  render() {
    return (
      <div className='modal-open modal-order'>
        <DetailsHeader />
        <ModalMap />
        <Details />
      </div>
    );
  }
}
