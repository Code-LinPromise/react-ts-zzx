import React from 'react';
import NavLayout from "../../layout/NavLayout";
import MainTitle from "../Components/MainTitle";
import  s from "./style.module.scss"
import InterviewCard from "../Components/InterviewCard";
import heart from "../../assets/images/heart.svg"

type CardInfo={
    emoji:string,
    title:string,
    details:string
}
const Home = () => {
    const cardInfo:CardInfo[]=[
        {
            emoji:"🎓",
            title:"专供成理",
            details:"围绕成理学子展开的专业化一体式服务网站"
        },
        {
            emoji:"📚",
            title:"资源汇总",
            details:"收录多种学科所需的学习资源"
        },
        {
            emoji:"🔑",
            title:"一步到位",
            details:"提供各种学习渠道，满足多样化需求"
        },
        {
            emoji:"🛠️",
            title:"功能丰富",
            details:"内含多种功能提升您学习的效率"
        },
        {
            emoji:"🤖",
            title:"AI对话",
            details:"专为大学生设计，帮助您解决在学习中遇到的各种问题"
        },
        {
            emoji:"✍️",
            title:"分享交流",
            details:"自由选择分享您的想法经验"
        },

    ]
    return (
        <div className={s.wrapper}>
            <NavLayout/>
            <MainTitle/>
            <ul className={s.InfoList}>
                {
                    cardInfo.map((item,index)=>{
                      return  <li key={index}><InterviewCard emoji={item.emoji}
                                                             title={item.title}
                                                             details={item.details}
                      /></li>
                    })
                }
            </ul>
            <div className={s.footer}>
                <img src={heart} alt=""/>
                <p>本网站由xxx团队维护并运行，感谢您的关注和使用</p>
            </div>
        </div>
    );
};

export default Home;