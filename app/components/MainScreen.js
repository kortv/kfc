import React from 'react';
import MakeOrder from './MainScreens/MakeOrder';
import TablOrders from './MainScreens/TablOrders';
import ModalMap from './Modals/ModalMap';


export default function MainScreen(props) {
  let screen = '';
  switch (props.screen) {
  case 'MakeOrder':
    screen = (<MakeOrder
    klass='modal-open modal-order' category={props.category}
    menuOne={props.menuOne} productList={props.productList}
    onClose={props.onClose} onCount={props.onCount} basket={props.basket}
    postOrderBasket={props.postOrderBasket}
    />);
    break;

  case 'TablOrders':
    screen = (<TablOrders
    tableClick={props.tableClick}
    category={props.category}
    orders={props.orders}
    >
      {props.showMap && <ModalMap />}
    </TablOrders>);
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
