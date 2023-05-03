import React from 'react';
import s from "./style.module.scss"
import trueIcon from "../../../assets/images/对勾.svg"

type Props={
    iconSrc:string,
    title:string,
    details:string,
    buttonTitle:string,
    infoList:string[],
    ClickEvent:()=>void
}
const KindCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.topRadio}>
                <img src={props.iconSrc} alt=""/>
            </div>
            <strong className={s.title}>{props.title}</strong>
            <h2 className={s.details}>{props.details}</h2>
            <button className={s.button} onClick={props?.ClickEvent}>{props.buttonTitle}</button>
            <ul className={s.infoList}>
                {
                    props.infoList.map((item,index)=>{
                        return <div className={s.font}>
                            <img src={trueIcon} alt=""/>
                            <li key={index}>
                            {item}
                        </li></div>
                    })
                }
            </ul>
        </div>
    );
};

export default KindCard;