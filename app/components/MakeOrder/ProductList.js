import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  const category = props.productList.length ? props.productList[0].category.title : '';
  const categoryList = props.category.length ? props.category.map((obj) => (
    <a
    key={obj.id} onClick={props.handleCategory} className='products-category'
    data-id={obj.id}
    >
      <span>{obj.title}</span>
    </a>
  )) : '';
  const productList = props.productList.map((obj) => (
    <Product product={props.basket[obj.id] || obj} key={obj.id} onCount={props.onCount} />
  ));
  return (
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
      {props.children}
    </div>
  );
}
