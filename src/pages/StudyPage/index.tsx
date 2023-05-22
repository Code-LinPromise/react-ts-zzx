import React, { useEffect, useState } from 'react';
import StudyCard from "../Components/StudyCard";
import  s from "./style.module.scss"
import { http } from '../../http';
import { AxiosResponse } from 'axios';
import {InfoList} from "../Components/StudyCard"

type StudyList={
    title:string,
    infoList:InfoList[]
}


const StudyPage = () => {
    const [studyList,setStudyList]=useState<StudyList[]>([])
    useEffect(()=>{
        http.get("/study-info").then((res:AxiosResponse)=>{
            setStudyList(res.data)
            console.log(res.data)
        })
    },[])
    return (
        <ul className={s.wrapper}>
            {
                studyList.map((item,index)=>{
                   return <li key={index}>
                        <StudyCard title={item.title} infoList={item.infoList}/>
                   </li>
                })
            }
        </ul>
    );
};

export default StudyPage;