import React from 'react';
import s from "./style.module.scss"

type Props={
    iconSrc:string,
    title:string,
    details:string,
    buttonTitle:string,
    infoList:string[]
}
const KindCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.topRadio}>
                <img src={props.iconSrc} alt=""/>
            </div>
            <strong className={s.title}>{props.title}</strong>
            <h2 className={s.details}>{props.details}</h2>
            <button className={s.button}>{props.buttonTitle}</button>
            <ul className={s.infoList}>
                {
                    props.infoList.map((item,index)=>{
                        return <li key={index}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default KindCard;