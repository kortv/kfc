import React from 'react';
import Product from './Product'
import MenuOrders from './../MenuOrders'
import ProductsCategory from './ProductsCategory'

export default function ModalOrder(props) {
  const categoryList = props.category.length ? props.category.map((obj) => (
    <a
    key={obj.id} onClick={props.menuOne} className='products-category'
    data-id={obj.id}
    >
      <span>{obj.title}</span>
    </a>
  )) : '';
    return (
        <div className={props.klass}>
            <div className="table-header">
                <div className="header-tel">
                    <span>+79037339131</span>
                </div>
                <div className="header-name">Создать новый заказ</div>
                <a className="button-close">
                    <div>+</div>
                </a>
            </div>
            <div className="modal-content">
                <div className="products-category_container" category={props.category}>
                  {categoryList}
                </div>
                <div className="list-products_container">
                    <div className="title-group">
                        Сандвичи
                    </div>
                    <div className="list-products">
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                    </div>
                    <div className="title-group">
                        Сандвичи
                    </div>
                    <div className="list-products">
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                        <Product klass='product'/>
                    </div>
                </div>
                <MenuOrders klass="menu-orders" />
            </div>
        </div>
    );
}
