import React from 'react';
import TableRow from './TableRow';
import ModalMap from './../components/ModalMap';
import ModalOrder from './../components/ModalOrder';
import ModalCall from './../components/ModalCall';

export default function MainTabl() {
    return (
        <div className="table-container">
            <ModalCall klass='modal-close modal-call'/>
            <ModalOrder klass='modal-close'/>
            <ModalMap klass='modal-close'/>
            <table>
                <tr className="table-header">
                    <th className="header-number">№</th>
                    <th className="header-type">Тип</th>
                    <th className="header-date">Дата заказа</th>
                    <th className="header-user_agent">Канал</th>
                    <th className="header-tel">Заказчик</th>
                    <th className="header-city">Город</th>
                    <th className="header-restaurant">Ресторан</th>
                    <th className="header-payment_order">Тип оплаты заказа</th>
                    <th className="header-payment_delivery">Тип оплаты доставки</th>
                    <th className="header-total">Сумма</th>
                    <th className="header-amount">Блюд в заказе</th>
                    <th className="header-time_issue">Время выдачи</th>
                    <th className="header-courier">Курьер</th>
                    <th className="header-status">Статус заказа</th>
                </tr>

                <TableRow />

                <tr className="table-row notification-row lb-cellphone">
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

                <tr className="table-row notification-row lb-incoming">
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

                <tr className="table-row notification-row lb-nomarker">
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

                <tr className="table-row notification-row lb-warning">
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

            </table>
        </div>
    );
}
