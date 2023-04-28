import React from 'react';
import s from "./style.module.scss"
type Props={
    placeHolder:string,
    icon:string,
    width?:string
}
const Input = (props:Props) => {
    return (
        <div className={s.wrapper} style={{width:props?.width}}>
            <span className={["iconfont",props.icon,s.icon].join(" ")}></span>
            <input type="text" placeholder={props.placeHolder}/>
        </div>
    );
};

export default Input;