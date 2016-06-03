import React from 'react';
import FiveStars from './FiveStars';


export default function MenuOrders(props) {
  const {
    postOrderBasket,
  } = props;
  return (
    <div className='menu-orders'>
      {props.children}
      <div className='delivery-list'>
        <div className='drop-down delivery-time active'>
          <div className='title_drop-down'>
            <span>Время доставки заказа&nbsp;</span>
            <span className="color-red">не указано</span>
          </div>
          <div className='content_drop-down'>
            <div className="time-delivery">
              <div className="day-delivery">
                <a className="today button-standart active">
                  <div className="button-text">Сегодня</div>
                </a>
                <a className="tomorrow button-standart">
                  <div className="button-text">Завтра</div>
                </a>
              </div>
              <div className="input_time-delivery">
                <input placeholder="00:00"/>
              </div>
            </div>
          </div>
        </div>
        <div className='payment-method'>
          <div className='payment-cash'>
            <input id='payment-cash' className='radio-button' type='radio' name='payment-method' />
            <label htmlFor='payment-cash'>
              <span>Оплата&nbsp;</span>
              <span className="color-red">курьеру наличными</span>
            </label>
            <div className="information">сдача с 5000 рублей</div>
          </div>
          <div className='payment-card'>
            <input id='payment-card' className='radio-button' type='radio' name='payment-method' />
            <label htmlFor='payment-card'>
              <span>Оплата&nbsp;</span>
              <span className="color-red">курьеру картой</span>
            </label>
          </div>
        </div>
        <div className="drop-down deliveryman-list active">
          <div className='title_drop-down'>
            <span>Доставщик&nbsp;</span>
            <span className="color-red">не указано</span>
          </div>
          <div className='content_drop-down'>
            <div className="settings-row color-red">
              <a>показать всех в 15 мин. зоне</a>
              <a>обновить</a>
            </div>
            <div className='deliveryman'>
              <input
              id='Gett_Taxi_Currier' className='radio-button' type='radio' name='deliveryman'
              />
              <label htmlFor='Gett_Taxi_Currier'>
                <span>Gett Taxi Currier&nbsp;</span>
                <FiveStars klass='five-stars' />
              </label>
              <span className='cost-delivery color-red'>300 руб</span>
            </div>
            <div className='deliveryman'>
              <input
              id='Yandex_Taxi_Currier' className='radio-button' type='radio' name='deliveryman'
              />
              <label htmlFor='Yandex_Taxi_Currier'>
                <span>Yandex Taxi Currier&nbsp;</span>
                <FiveStars klass='five-stars' />
              </label>
              <span className='cost-delivery color-red'>300 руб</span>
            </div>
            <div className='deliveryman'>
              <input id='Scooter_Currier' className='radio-button' type='radio' name='deliveryman' />
              <label htmlFor='Scooter_Currier'>
                <span>Scooter Currier&nbsp;</span>
                <FiveStars klass='five-stars' />
              </label>
              <span className='cost-delivery color-red'>300 руб</span>
            </div>
          </div>
        </div>
      </div>
      <div className='place-order_container'>
        <div className='arrival-time color-red'>
          <span>Ожидается прибытие курьера к&nbsp;</span>
          <span>13:30</span>
        </div>
        <a onClick={postOrderBasket} className='button-standart'>
          <div className='button-text'>Оформить заказ</div>
        </a>
      </div>
    </div>
  );
}
