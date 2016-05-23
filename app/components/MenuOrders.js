import React from 'react';


export default function MenuOrders(props) {
  return (
    <div className={props.klass}>
      <div>
        <input type='text' name='city' list='cityname' placeholder='Город' />
        <datalist id='cityname'>
          <option value='Москва'>Москва</option>
          <option value='Ярославль'>Ярославль</option>
        </datalist>
      </div>
    </div>
  );
}
