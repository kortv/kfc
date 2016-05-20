import React from 'react';

export default function ModalCall(props) {
    return (
        <div className={props.klass}>
            <div className="modal-container">
                <div className="modal-img"></div>
                <div className="modal-tel">+79037338131</div>
                <div className="modal-cart">
                    <span>текущий заказ:&nbsp;</span>
                    <span>нет заказа</span>
                </div>
                <a className="button-standart button-white">Ответить</a>
            </div>
        </div>
    );
    }
