import React from 'react';

export default function TimePicker() {
  const hours = [];
  const minuts = [];
  let h = 8;
  let m = 0;
  for (h; h < 24; h++) {
    hours[h] = `${h}`.length > 1 ? h : `0${h}`;
  }
  for (m; m < 12; m++) {
    minuts[m] = `${m * 5}`.length > 1 ? m * 5 : `0${m * 5}`;
  }
  return (
    <fotm>
      <div>
        <select data-type='hours'>
          {hours.map((obj) => <option key={obj} value={obj}>{obj}</option>)}
        </select>
      </div>
      <div>
        <select data-type='minutes'>
          {minuts.map((obj) => <option key={obj} value={obj}>{obj}</option>)}
        </select>
      </div>
    </fotm>
  );
}
