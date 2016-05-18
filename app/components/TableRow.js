import React from 'react';

export default function TableRow() {
    return (
        <tr className="table-rowe">
            <td className="column-number">12345</td>
            <td className="column-type">
                <span className="icon-moto"></span>
                <span>доставка</span>
            </td>
            <td className="column-date">
                <span>13:00</span>
                <span>24.04.2016</span>
            </td>
            <td className="column-user_agent">iOS</td>
            <td className="column-tel">
                <a>+79037883181</a>
            </td>
            <td className="column-city">Москва</td>
            <td className="column-restaurant">Речной</td>
            <td className="column-payment_order">Онлайн</td>
            <td className="column-payment_delivery">Наличные</td>
            <td className="column-total">
                <span>900</span>
                <span>&nbsp;руб</span>
            </td>
            <td className="column-amount">
                <span className="icon-cart"></span>
                <a>5</a>
            </td>
            <td className="column-time_issue">
                <span>13:00</span>
                <span>24.04.2016</span>
            </td>
            <td className="column-courier">
                <span>Красильников Василий</span>
                <span>
                    <p className="icon-map"></p>
                    <p>курьер на карте</p>
                </span>
            </td>
            <td className="column-status">Ожидание курьера</td>
            <div className="icon-status_container">
                <div className="icon-status"></div>
            </div>
        </tr>
    );
}
