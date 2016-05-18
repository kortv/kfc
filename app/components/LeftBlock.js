import React from 'react';
import DatePick from './DatePick';

export default function LeftBlock() {
  return (
    <div className="left-menu">
        <div className="table-header">
            <div className="logo-container"></div>
            <div className="date-container">
                14:50 24.04.2016
            </div>
        </div>
        <div className="left-menu-container">
            <div className="datepicker">
                <DatePick />
            </div>
            <a className="button-standart">
                <div className="button-img-left"></div>
                <div className="button-text">Создать новый заказ</div>
            </a>
            <div className="search">
                <input placeholder="Поиск заказа/заказчика"/>
            </div>
            <div className="orders-delivery">
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
            <div className="waiting-assessment">
                <div className="block-title">
                    <span>ОЖИДАНИЕ ОЦЕНКИ ДОСТАВКИ</span>
                    <br/>
                    <span>ПО ИСТОЧНИКАМ</span>
                </div>
                <div className="block-row">
                    <div className="block-info">звонок:</div>
                    <div className="block-nth">125</div>
                </div>
                <div className="block-row">
                    <div className="block-info">приложение KFC:</div>
                    <div className="block-nth">43</div>
                </div>
                <div className="block-row">
                    <div className="block-info">другие источники:</div>
                    <div className="block-nth">27</div>
                </div>
            </div>
            <div className="zones-control">
                <div className="block-title">
                    <span>КОНТРОЛЬ ЗОН</span>
                    <a>детали</a>
                </div>
                <div className="block-row">
                    <div className="block-info">всего зон доставки:</div>
                    <div className="block-nth">15</div>
                </div>
                <div className="block-row">
                    <div className="block-info">всего активных курьеров:</div>
                    <div className="block-nth">43</div>
                </div>
                <div className="block-row">
                    <div className="block-info">зоны без активных курьеров:</div>
                    <div className="block-nth">2</div>
                </div>
            </div>
            <div className="auth-user">
                <div className="icon-user"></div>
                <div className="user-name">Татьяна Лукичева</div>
                <a className="exit-button">закончить работу</a>
            </div>
        </div>
    </div>
  );
}
