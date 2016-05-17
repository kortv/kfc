import React from 'react';
import TableRow from './TableRow';

export default function MainTabl() {
    return (
        <div className="table-container">
            <table>
                <tr className="table-header">
                    <th>№</th>
                    <th>Тип</th>
                    <th>Дата заказа</th>
                    <th>Канал</th>
                    <th>Заказчик</th>
                    <th>Город</th>
                    <th>Ресторан</th>
                    <th>Тип оплаты заказа</th>
                    <th>Тип оплаты доставки</th>
                    <th>Сумма</th>
                    <th>Блюд в заказе</th>
                    <th>Время выдачи</th>
                    <th>Курьер</th>
                    <th>Статус заказа</th>
                </tr>
                <TableRow />
                <TableRow />
                <TableRow />
            </table>
        </div>
    );
}
