import React from 'react';
import s from "./style.module.scss"

type Props={
    context:string,
    bgColor:string,
    color:string,
}
const DiyButton = (props:Props) => {
    return (
        <div className={s.wrapper} style={{backgroundColor:props.bgColor,color:props.color}}>
            {props.context}
        </div>
    );
};

export default DiyButton;