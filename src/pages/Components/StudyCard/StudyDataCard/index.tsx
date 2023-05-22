import React, { useLayoutEffect } from 'react';
import s from "./style.module.scss"
import error from "../../../../assets/images/error.png"

type Props={
    Icon:string,
    name:string,
    details:string,
    url:string
}
const StudyDataCard = (props:Props) => {
    useLayoutEffect(()=>{
        const errorImage:HTMLImageElement |null=document.querySelector("#errorImage")
        if(!errorImage){
            return 
        }
        errorImage.addEventListener("error",()=>{
            errorImage.src=error
        })
    },[])
    return (
        <a className={s.wrapper} href={props.url} target="_blank">
            <div className={s.image}>
                <img src={props.Icon} alt="" id="errorImage" className={s.icon}/>
            </div>
            <div className={s.text}>
                <strong className={s.name}>{props.name}</strong>
                <span className={s.details}>{props.details}</span>
            </div>
        </a>
    );
};

export default StudyDataCard;