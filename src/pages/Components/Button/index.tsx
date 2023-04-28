import React from 'react';
import s from "./style.module.scss"

type Props={
    type: "submit" |"button",
    context:string,
    clickEvent?:()=>void,
    width?:string,
    isCool?:boolean
}
const Button = (props:Props) => {
    return (
        <div className={s.wrapper} style={{width:props?.width, opacity:props?.isCool? "0.5" :"1"}}>
            <button type={props.type} onClick={props?.clickEvent}>{props.context}</button>
        </div>
    );
};

export default Button;