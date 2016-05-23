import React from 'react';


export default function Product(props) {
    return (
        <div className={props.klass}>
            <div className="product-container">
                <div className="product-img">
                    <img src="http://static.kfc.ru/products//medium/product_88_641579423.png"/>
                </div>
                <div className="product-info">
                    <div className="product-title">
                        <span>Боксмастер из тостера</span>
                    </div>
                    <div className="product-price">
                        <span>149</span>
                        <span>&nbsp;₽</span>
                    </div>
                </div>
            </div>
            <div className="product-nth">
                <a className="ct-minus">
                    <span>-</span>
                </a>
                <div className="ct-nth">
                    <span>0</span>
                </div>
                <a className="ct-plus">
                    <span>+</span>
                </a>
            </div>
        </div>
    );
}
