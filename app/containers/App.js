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
    };
  }

  componentDidMount() {
    google.maps.event.addDomListener(window, 'load', googleMapInit);
    this.postGetOrders(paths.main);
    this.postGetMenuCategory(paths.menuProduct,
    {"filter":{"type":"and","args":[{"type":"eq","args":["restaurant_id","2995"]},{"type":"eq","args":["category_id",3]}]},"sort":[{"column":"price","descending":false}],"start":0,"count":999}
/*      { "start":0,"count":999 } */
/*{"filter":{"type":"eq","args":["restaurant_id","2995"]},"start":0,"count":999}*/
/*{"filter":{"type":"eq","args":[{"restaurant_id":"2995", "category_id": "5" }]},"start":0,"count":999}
*/  );
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
