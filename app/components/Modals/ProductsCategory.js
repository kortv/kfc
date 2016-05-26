import React from 'react';

export default function ProductsCategory(props) {
    return (
        <div className={props.klass}>
            <a className="products-category active">
                <span>Сандвичи</span>
            </a>
            <a className="products-category">
                <span>Курица</span>
            </a>
            <a className="products-category">
                <span>Баскеты</span>
            </a>
            <a className="products-category">
                <span>Снэки</span>
            </a>
            <a className="products-category">
                <span>Салаты</span>
            </a>
            <a className="products-category">
                <span>Десерты</span>
            </a>
            <a className="products-category">
                <span>Напитки</span>
            </a>
            <a className="products-category">
                <span>Грамотный выбор</span>
            </a>
            <a className="products-category">
                <span>Завтрак</span>
            </a>
            <a className="products-category">
                <span>Соусы</span>
            </a>
            <a className="products-category">
                <span>Меню от 39 рублей</span>
            </a>
            <a className="products-category">
                <span>Техасский BBQ</span>
            </a>
        </div>
    );
}
