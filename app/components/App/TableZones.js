import React from 'react';


export default function TableZones(props) {
    return (
        <div className={props.klass}>
            <div className="block-title color-red">
                <span>КОНТРОЛЬ ЗОН</span>
                <a>детали</a>
            </div>
            <div className="block-row">
                <div className="block-info">всего зон доставки:</div>
                <div className="block-nth color-red">15</div>
            </div>
            <div className="block-row">
                <div className="block-info">всего активных курьеров:</div>
                <div className="block-nth color-red">43</div>
            </div>
            <div className="block-row">
                <div className="block-info">зоны без активных курьеров:</div>
                <div className="block-nth color-red">2</div>
            </div>
        </div>
    );
}
