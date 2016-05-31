import React from 'react';
import IconStar from '../../img/IconStar'


export default function FiveStars(props) {
    return (
        <div className={props.klass}>
            <IconStar klass="icon-star full-star"/>
            <IconStar klass="icon-star full-star"/>
            <IconStar klass="icon-star full-star"/>
            <IconStar klass="icon-star full-star"/>
            <IconStar klass="icon-star empty-star"/>
        </div>
    );
}
