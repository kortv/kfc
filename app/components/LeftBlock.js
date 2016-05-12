import React from 'react';

export default function LeftBlock() {
  const custom = {
    backgroundImage: 'url("../app/img/delivery-moto.png")',
    width: '30px',
    height: '20px',
  };
  return (
    <div className="left-menu">
      Левый столбец
      <div className="cart"></div>

      <div style={custom}></div>

    </div>
  );
}
