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
            <div className="search"></div>
            <div className="orders-delivery"></div>
            <div className="waiting-assessment"></div>
            <div className="zones-control"></div>
            <div className="auth-user">
                <div className="icon-user"></div>
                <div className="user-name">Татьяна Лукичева</div>
                <a className="exit-button">Закончить работу</a>
            </div>
        </div>
    </div>
  );
}
