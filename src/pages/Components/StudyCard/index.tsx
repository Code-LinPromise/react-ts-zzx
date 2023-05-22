import React from 'react';
import s from "./style.module.scss"
import StudyDataCard from "./StudyDataCard";
export type InfoList={
    imageUrl:string,
    name:string,
    details:string,
    url:string
}
type Props={
    title:string,
    infoList:InfoList[]
}
const StudyCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <span className={["iconfont","icon-ziyuan",s.icon].join(" ")}> </span>
                <span className={s.text}>{props.title}</span>
            </div>
            <ul className={s.infoList}>
                {
                    props.infoList.map((item,index)=>{
                        return <li  className={s.item} key={index}>
                            <StudyDataCard Icon={item.imageUrl} name={item.name} details={item.details} url={item.url}/>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default StudyCard;