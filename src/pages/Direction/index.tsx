import React from 'react';
import s from "./style.module.scss"
import SearchMain from "../Components/SearchMain";
import KindCard from "../Components/KindCard";
import appIcon from "../../assets/images/appIcon.svg"
import robotIcon from "../../assets/images/robotIcon.svg"
import studyIcon from "../../assets/images/studyIcon.svg"
import {useNavigate} from "react-router-dom";

type CardInfo={
    iconSrc:string,
    title:string,
    details:string,
    buttonTitle:string,
    infoList:string[],
    ClickEvent:()=>void
}
const Direction = () => {
    const navigate=useNavigate()
    const cardInfo:CardInfo[]= [
        {
        iconSrc:studyIcon,
        title: "学习专区",
        details: "该模块专为成理学生提供优质网站视频资源的平台。在这里你可以找到各种课程的视频讲解，以及历年的考试题目和答案。",
        buttonTitle: "Go Study",
        infoList: ["高校课程视频，随心学习","历年考试题目，轻松备考","专业学习平台，质量可靠"],
            ClickEvent:function (){
                navigate("/study")
            }
        },
        {
            iconSrc:appIcon,
            title: "应用探索",
            details: "该模块可以为你提供海量的优质工具和资源，涵盖各种办公、学习、创作等场景。你可以在这里找到适合你的工具，让你的工作和生活更高效、更有趣。",
            buttonTitle: "Go Explore",
            infoList: ["全面的应用资源","丰富的应用信息","个性化的推荐服务"],
            ClickEvent:function (){
                navigate("/app")
            }
        },
        {
            iconSrc:robotIcon,
            title: "智能问答",
            details: "该模块利用人工智能技术，为大学生提供高效、便捷、智能的学习辅助工具。它可以根据大学生输入的问题，从海量的知识库中检索和生成最合适的答案，旨在帮助大学生拓展知识面，提高学习效果，激发学习兴趣，节省学习时间和精力。",
            buttonTitle: "Go Ask",
            infoList: ["提高学习效率与质量","拓展视野与思维","激发兴趣和创造力"],
            ClickEvent:function (){
                navigate("/ai")
            }
        },
    ]
    return (
        <div className={s.wrapper}>
            <div className={s.bgBecome}></div>
            <SearchMain/>
            <div className={s.kindCard}>
                <div className={s.cardBgColor}></div>
                <ul className={s.card}>
                    {
                        cardInfo.map((item,index)=>{
                            return <li key={index}>
                                <KindCard iconSrc={item.iconSrc} title={item.title} details={item.details}
                                          buttonTitle={item.buttonTitle} infoList={item.infoList}
                                          ClickEvent={item.ClickEvent}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Direction;