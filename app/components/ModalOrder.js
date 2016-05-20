import React from 'react';

export default function ModalOrder(props) {
    return (
        <div className={props.klass}>
            <div className="table-header">
                <div className="header-tel">+79037339131</div>
                <div className="header-name">Создать новый заказ</div>
                <a className="button-close">
                    <div>+</div>
                </a>
            </div>
            <div className="modal-content">
                <div className="list-products">

                </div>
                <div className="menu-orders">

                </div>
            </div>
        </div>
    );
}
