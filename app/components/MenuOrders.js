import React from 'react';


export default function MenuOrders(props) {
    return (
        <div className={props.klass}>
            <div className="input-city">
                <input type='text' name='city' list='cityname' placeholder='Город'/>
                <datalist id='cityname'>
                    <option value='Москва'>Москва</option>
                    <option value='Воскресенск'>Воскресенск</option>
                    <option value='Клин'>Клин</option>
                    <option value='Сочи'>Сочи</option>
                </datalist>
            </div>
            <div className="input-street">
                <input type='text' name='street' placeholder='Улица*'/>
            </div>
            <div className="input-home">
                <input type='text' name='home' placeholder='Дом/корпус/строение*'/>
            </div>
            <div className="input-container">
                <input type='text' name='entrance' placeholder='Подъезд'/>
                <input type='text' name='floor' placeholder='Этаж'/>
                <input type='text' name='apartment' placeholder='Квартира/офис'/>
            </div>
            <div className="input-comments">
                <span>Комментарии&nbsp;</span>
                <input type='text' name='comments' placeholder='код домофона 1478'/>
            </div>
            <div className="payment-method">
                <div className="payment-cash">
                    <input id="payment-cash" className="radio-button" type="radio" name="payment-method"/>
                    <label htmlFor="payment-cash">
                        <span>Оплата&nbsp;</span>
                        <span>курьеру наличными</span>
                    </label>
                </div>
                <div className="payment-card">
                    <input id="payment-card" className="radio-button" type="radio" name="payment-method"/>
                    <label htmlFor="payment-card">
                        <span>Оплата&nbsp;</span>
                        <span>курьеру картой</span>
                    </label>
                </div>
            </div>
            <div className="place-order_container">
                <div className="arrival-time">
                    <span>Ожидается прибытие курьера к&nbsp;</span>
                    <span>13:30</span>
                </div>
                <a className="button-standart">
                    <div className="button-text">Оформить заказ</div>
                </a>
            </div>
        </div>
    );
}
