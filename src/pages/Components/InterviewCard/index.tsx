import React from 'react';
import s from "./style.module.scss"

type Props={
    emoji:string,
    title:string,
    details:string,
}
const InterviewCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.emoji}>
                {props.emoji}
            </div>
            <div className={s.title}>
                {props.title}
            </div>
            <div className={s.details}>
                {props.details}
            </div>
        </div>
    );
};

export default InterviewCard;