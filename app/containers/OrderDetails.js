import React, { Component } from 'react';

import ModalMap from './../components/Courier/ModalMap';
import Details from './../components/OrderDetails/Details';
import DetailsHeader from './../components/OrderDetails/DetailsHeader';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className='modal-open modal-order'>
        <DetailsHeader />
        <ModalMap mapHeight={{ height: '600px' }} />
        <Details />
      </div>
    );
  }
}
