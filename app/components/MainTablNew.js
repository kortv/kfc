import React from 'react';
import TableRow from './TableRow';
import ModalOrder from './Modals/ModalOrder';

export default function MainTablNew(props) {
  const rows = props.orders.length ? props.orders.map((order) => <TableRow
  order={order} key={order.id}
  />) : '';
  return (
    <div className='table-container'>
      <ModalOrder klass='modal-open modal-order' />
      <table>
        <thead>
          <tr className='table-header'>
            <th className='header-number'>№</th>
            <th className='header-type'>Тип</th>
            <th className='header-date'>Дата заказа</th>
            <th className='header-user_agent'>Канал</th>
            <th className='header-tel'>Заказчик</th>
            <th className='header-city'>Город</th>
            <th className='header-restaurant'>Ресторан</th>
            <th className='header-payment_order'>Тип оплаты заказа</th>
            <th className='header-payment_delivery'>Тип оплаты доставки</th>
            <th className='header-total'>Сумма</th>
            <th className='header-amount'>Блюд в заказе</th>
            <th className='header-time_issue'>Время выдачи</th>
            <th className='header-courier'>Курьер</th>
            <th className='header-status'>Статус заказа</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
