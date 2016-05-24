import React from 'react';

export default function ProductsCategory(props) {
  const categoryList = props.category.length ? props.category.map((obj) =>(
    <a key={obj.id} className="products-category">
        <span>{obj.title}</span>
    </a>
  )) : '';
    return (
        <div className={props.klass}>
          {categoryList}
        </div>

    );
}
