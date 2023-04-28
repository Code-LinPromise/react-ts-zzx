import React from 'react';
import s from "./style.module.scss"

type Props={
    type: "submit" |"button",
    context:string
}
const Button = (props:Props) => {
    return (
        <div>
            <button type={props.type}>{props.context}</button>
        </div>
    );
};

export default Button;