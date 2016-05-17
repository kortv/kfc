import React from 'react';
import DatePick from './DatePick';

export default function LeftBlock() {
  return (
    <div className="left-menu">
        <div className="table-header"></div>
        <div className="">
            <div className="datepicker">
                <DatePick />
            </div>
            <div className="button-standart"></div>
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
