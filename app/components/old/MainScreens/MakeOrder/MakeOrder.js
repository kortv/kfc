import React from 'react';
import Product from './Product';
import MenuOrders from './../MenuOrders';
// import ProductsCategory from './ProductsCategory';

export default function MakeOrder(props) {
  const category = props.productList.length ? props.productList[0].category.title : '';
  const categoryList = props.category.length ? props.category.map((obj) => (
    <a
    key={obj.id} onClick={props.menuOne} className='products-category'
    data-id={obj.id}
    >
      <span>{obj.title}</span>
    </a>
  )) : '';
  const productList = props.productList.length ? props.productList.map((obj) => (
    <Product product={props.basket[obj.id] || obj} key={obj.id} onCount={props.onCount} />
  )) : '';
  return (
    <div className='modal-open modal-order'>
      <div className='table-header'>
        <div className='header-tel'>
          <span>+79037339131</span>
        </div>
        <div className='header-name'>Создать новый заказ</div>
        <a onClick={props.onClose} className='button-close'>
          <div>+</div>
        </a>
      </div>
      <div className='modal-content'>
        <div className='products-category_container' category={props.category}>
          {categoryList}
        </div>
        <div className='list-products_container'>
          <div className='title-group'>
            {category}
          </div>
          <div className='list-products'>
            {productList}
          </div>
        </div>
        <MenuOrders
        klass='menu-orders' postOrderBasket={props.postOrderBasket} allState={props.allState}
        />
      </div>
    </div>
  );
}
