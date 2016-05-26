import React from 'react';
import paths from './../../_paths';


export default function Product({ product, onCount }) {
  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-img'>
          <img src={`${paths.staticImg}/small/${product.image}`} />
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
        <a onClick={() => { onCount(product, -1); }} className='ct-minus'>
          <span>-</span>
        </a>
        <div className='ct-nth'>
          <span>{product.qnt || 0}</span>
        </div>
        <a onClick={() => { onCount(product, 1); }} className='ct-plus'>
          <span>+</span>
        </a>
      </div>
    </div>
  );
}
