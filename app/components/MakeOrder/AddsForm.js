import React from 'react';

export default function Adds(props) {
  const {
    cityList, streetList, houseList, postGetHouseList, setRestaurantId, setId, postGetStreetList,
  } = props;
  return (
    <fotm>
      <div
      className='input-city'
      onClick={(e) => { console.log(e); }}
      >
        <input
        onChange={(e) => {
          const arr = cityList.filter((obj) => obj.title == e.target.value);
          if (arr.length) {
            console.log(arr[0]);
            setId(arr[0].id, 'cityId');
          }
        }} type='text' name='city'
        list='cityname' defaultValue='Москва'
        />
        <datalist id='cityname'>
          {cityList.map((city) => <option key={city.id} name={city.id} value={city.title}>
          </option>)}
        </datalist>
        <a className='button-standart'>
          <div className='button-text'>Сообщить новый адрес</div>
        </a>
      </div>
      <div className='input-street'>
        <input
        onChange={(e) => {
          const val = e.target.value;
          console.log(val);
          if (val && val.length === 1) {
            postGetStreetList(val);
          }
          const arr = streetList.filter((obj) => obj.street == val);
          if (arr.length) {
            console.log(arr[0]);
            postGetHouseList(arr[0]);
          }
        }} type='text' name='street'
        list='streetname' placeholder='Улица*'
        />
        <datalist id='streetname'>
          {streetList.map((obj, key) => <option key={key} value={obj.street}>
          </option>)}
        </datalist>
      </div>
      <div className='input-home'>
        <input
        disabled={!streetList.length}
        onChange={(e) => {
          console.log(e.target.value);
          const arr = houseList.filter((obj) => obj.housing_number === e.target.value);
          if (arr.length) {
            console.log(arr[0]);
            setRestaurantId(arr[0].restaurant_id);
          }
        }}
        type='text' list='homename' name='home' placeholder='Дом/корпус/строение*'
        />
        <datalist id='homename'>
          {houseList.map((obj) => <option key={obj.id} value={obj.housing_number}>
          </option>)}
        </datalist>
      </div>
      <div className='input-container'>
        <input type='text' name='entrance' placeholder='Подъезд' />
        <input type='text' name='floor' placeholder='Этаж' />
        <input type='text' name='apartment' placeholder='Квартира/офис' />
      </div>
      <div className='input-comments'>
        <span>Комментарии&nbsp;</span>
        <input type='text' name='comments' placeholder='код домофона 1478' />
      </div>
    </fotm>
  );
}
