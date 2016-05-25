import React from 'react';


export default function Product({ product }) {
  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-img'>
          <img src={`http://static.kfc.ru/products//small/${product.image}`} />
        </div>
        <div className='product-info'>
          <div className='product-title'>
            <span>{product.title}</span>
          </div>
          <div className='product-price'>
            <span>{product.price}</span>
            <span>&nbsp;₽</span>
          </div>
        </div>
      </div>
      <div className='product-nth'>
        <a className='ct-minus'>
          <span>-</span>
        </a>
        <div className='ct-nth'>
          <span>0</span>
        </div>
        <a className='ct-plus'>
          <span>+</span>
        </a>
      </div>
    </div>
  );
}
