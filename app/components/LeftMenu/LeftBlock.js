import React from 'react';
import DatePick from './DatePick';
import TableOrders from './TableOrders';
import TableRating from './TableRating';
import TableZones from './TableZones';
import { Link } from 'react-router';

export default function LeftBlock(props) {
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
            <Link to="/order" className="button-standart">
                <div className="button-img-left"></div>
                <div className="button-text">Создать новый заказ</div>
            </Link>
            <div className="search">
                <input placeholder="Поиск заказа/заказчика"/>
            </div>

            <TableOrders klass="orders-delivery" />
            <TableRating klass="waiting-assessment" />
            <TableZones klass="zones-control" />

            <div className="auth-user">
                <div className="icon-user"></div>
                <div className="user-name">Татьяна Лукичева</div>
                <a className="exit-button">закончить работу</a>
            </div>
        </div>
    </div>
  );
}
