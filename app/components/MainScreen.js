import React from 'react';
import MakeOrder from './MainScreens/MakeOrder';
import TablOrders from './MainScreens/TablOrders';

export default function MainScreen(props) {
  let screen = '';
  switch (props.screen) {
  case 'MakeOrder':
    screen = (<MakeOrder
    klass='modal-open modal-order' category={props.category}
    menuOne={props.menuOne} productList={props.productList}
    />);
    break;

  case 'TablOrders':
    screen = (<TablOrders
    category={props.category}
    orders={props.orders}
    />);
    break;

  default:
    console.log(props.screen);
  }
  return (
    <div className='table-container'>
      {screen}
    </div>
  );
}
