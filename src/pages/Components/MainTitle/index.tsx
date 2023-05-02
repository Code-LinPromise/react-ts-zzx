import React from 'react';
import s from "./stlye.module.scss"
import DiyButton from "../DiyButton";
import logo from "../../../assets/images/logo.svg"
import {useNavigate} from "react-router-dom";
const MainTitle = () => {
    const navigate=useNavigate()
    function goDirection(){
        navigate("/direction")
    }
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <span className={s.name}>Vite</span>
                <span className={s.details}>大学生学习导航网站</span>
                <div className={s.titleAndVersion}>
                    <span className={s.copilotTitle}>为学习提供极速平台</span>
                    <span className={s.version}>v1.0.0</span>
                </div>
                <div className={s.buttons}>
                    <DiyButton context={"开始"} bgColor={"#646cff"} color={"#FFF"} ClickEvent={goDirection}/>
                    <DiyButton context={"为什么选择Vite?"} bgColor={"#e3e3e5"} color={"#000"}/>
                    <DiyButton context={"分享学习资料"} bgColor={"#e3e3e5"} color={"#000"}/>
                </div>
            </div>
            <div className={s.contain}>
                <div className={s.logo}>
                </div>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};

export default MainTitle;