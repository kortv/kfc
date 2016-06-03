import React from 'react';


export default function TableRating(props) {
    return (
        <div className={props.klass}>
            <div className="block-title color-red">
                <span>ОЖИДАНИЕ ОЦЕНКИ ДОСТАВКИ</span>
                <br/>
                <span>ПО ИСТОЧНИКАМ</span>
            </div>
            <div className="block-row">
                <div className="block-info">звонок:</div>
                <div className="block-nth color-red">125</div>
            </div>
            <div className="block-row">
                <div className="block-info">приложение KFC:</div>
                <div className="block-nth color-red">43</div>
            </div>
            <div className="block-row">
                <div className="block-info">другие источники:</div>
                <div className="block-nth color-red">27</div>
            </div>
        </div>
    );
}
