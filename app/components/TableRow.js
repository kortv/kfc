import React from 'react';

export default function TableRow() {
    return (
        <tr className="table-row">
            <td>12345</td>
            <td>
                <span className="icon-moto"></span>
                <span>доставка</span>
            </td>
            <td>
                <span>13:00</span>
                <span>24.04.2016</span>
            </td>
            <td>iOS</td>
            <td>+79037883181</td>
            <td>Москва</td>
            <td>Речной</td>
            <td>Онлайн</td>
            <td>Наличные</td>
            <td>
                <span>900</span>
                <span>руб</span>
            </td>
            <td>
                <div className="icon-cart"></div>
                <span>5</span>
            </td>
            <td>
                <span>13:00</span>
                <span>24.04.2016</span>
            </td>
            <td>
                <span>Красильников Василий</span>
                <span>курьер на карте</span>
            </td>
            <td>Ожидание курьера</td>
        </tr>
    );
}
