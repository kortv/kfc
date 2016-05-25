import React from 'react';
import getTime from './../../events/getTime';

export default function TableRow({ order }) {
  return (
    <tr className='table-rowe'>
      <td className='column-number'>{order.id}</td>
      <td className='column-type'>
        <span className='icon-moto'></span>
        <span>доставка</span>
      </td>
      <td className='column-date'>
        <span>{getTime(order.created_at).time}</span>
        <span>{getTime(order.created_at).date}</span>
      </td>
      <td className='column-user_agent'>{order.os || ''}</td>
      <td className='column-tel'>
        <a>+79037883181</a>
      </td>
      <td className='column-city'>Москва</td>
      <td className='column-restaurant'>{order.restaurant_name}</td>
      <td className='column-payment_order st-online'>Онлайн</td>
      <td className='column-payment_delivery'>{order.payment_method}</td>
      <td className='column-total'>
        <span>900</span>
        <span>&nbsp;руб</span>
      </td>
      <td className='column-amount'>
        <span className='icon-cart'></span>
        <a>5</a>
      </td>
      <td className='column-time_issue'>
        <span>{getTime(order.delivery_time).time}</span>
        <span>{getTime(order.delivery_time).date}</span>
      </td>
      <td className='column-courier'>
        <span>Красильников Василий</span>
        <span>
          <p className='icon-map'></p>
          <p>курьер на карте</p>
        </span>
      </td>
      <td className='column-status'>{order.status}</td>
      <a className='icon-status_container'>
        <div className='icon-status'></div>
      </a>
    </tr>
  );
}
