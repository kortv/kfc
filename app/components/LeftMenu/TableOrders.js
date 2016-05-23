import React from 'react';


export default function TableOrders(props) {
    return (
        <div className={props.klass}>
            <div className="block-title">ЗАКАЗЫ НА ДОСТАВКУ</div>
            <div className="block-row">
                <div className="block-info">всего заказов:</div>
                <div className="block-nth">125</div>
            </div>
            <div className="block-row">
                <div className="block-info">ожидание подтверждения курьера:</div>
                <div className="block-nth">4</div>
            </div>
            <div className="block-row">
                <div className="block-info">ожидание оплаты курьером:</div>
                <div className="block-nth">7</div>
            </div>
            <div className="block-row">
                <div className="block-info">заказов к выдаче курьерам:</div>
                <div className="block-nth">25</div>
            </div>
            <div className="block-row">
                <div className="block-info">заказов в доставке:</div>
                <div className="block-nth">100</div>
            </div>
        </div>
    );
}
