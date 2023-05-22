import React, {useEffect, useState} from 'react';
import  s from "./style.module.scss"
import logo from "../../assets/images/logo.svg"
import {randomNum} from "../../utils/RandomFunction";
import DiyButton from "../../pages/Components/DiyButton";
import {useNavigate} from "react-router-dom";
import {http} from "../../http";
import {Popconfirm} from "antd";
import {message} from "antd/lib";

const NavLayout = () => {
    const navigate=useNavigate()
    const [iconName,setIconName]=useState("icon-taiyang")
    const [randomFont,setRandomFont]=useState("")
    const [userName,setUserName]=useState("")
    useEffect(()=>{
        const email:string |null=sessionStorage.getItem("email")
        if(email!=null){
            setUserName(email)
        }
    },[])
    const FontArray=[
        "人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。",
        "生命在闪耀中现出绚烂，在平凡中现出真实。",
        "阳光和鲜花在达观的微笑里，凄凉与痛苦在悲观的叹息中。",
        "生活就是面对真实的微笑，就是越过障碍注视将来。",
        "从容地去度那生活，一直到饮尽了杯中最后一滴。",
        "天行健 君子以自强不惜 地势坤 君子以厚德载物",
        "对昨天的悔恨最终只是囚禁了今天和明天。",
        "有的时候我真觉得全世界都像海上撞沉了船，最要紧的还是救出自己。"
    ]
    useEffect(()=>{
        setRandomFont(FontArray[randomNum(0,FontArray.length-1)])
    },[])
    useEffect(()=>{
        const theme=localStorage.getItem("theme")
        const body =document.querySelector("body")
        const block:HTMLDivElement |null=document.querySelector("#block")
        if(theme===null){
            localStorage.setItem("theme","light")
            return
        }
        if(body!==null){
            if(block!=null && theme==="light"){
                block.style.left="0%"
                setIconName("icon-taiyang")
                body.className=theme
            }
            if(block!=null && theme==="dark"){
                block.style.left="50%"
                setIconName("icon-yueliang")
                body.className=theme
            }
        }
    },[])
    const shiftTheme=()=>{
        const body =document.querySelector("body")
        const block:HTMLDivElement |null=document.querySelector("#block")
        const theme=localStorage.getItem("theme")
        if(block!=null && theme==="light"){
            block.style.left="50%"
            localStorage.setItem("theme","dark")
            if(body!==null){
                body.className="dark"
            }
            setIconName("icon-yueliang")
        }
        else if(block!=null && theme==="dark"){
            block.style.left="0%"
            localStorage.setItem("theme","light")
            if(body!==null){
                body.className="light"
            }
            setIconName("icon-taiyang")
        }
    }
    useEffect(()=>{
        window.WIDGET = {
            "CONFIG": {
                "modules": "01234",
                "background": "5",
                "tmpColor": "888888",
                "tmpSize": "16",
                "cityColor": "888888",
                "citySize": "16",
                "aqiColor": "FF9900",
                "aqiSize": "16",
                "weatherIconSize": "24",
                "alertIconSize": "18",
                "padding": "10px 10px 10px 10px",
                "shadow": "0",
                "language": "auto",
                "fixed": "false",
                "vertical": "top",
                "horizontal": "left",
                "key": "888b69b5741c42e8a53c6e002682147c"
            }
        }
        const script = document.createElement('script')
        script.setAttribute('src', "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0")
        document.body.append(script)
    },[])
    function login(){
        navigate("/sign_in")
    }
    const confirm = () => {
        message.success('退出成功！').then(()=>{
            setUserName("")
            sessionStorage.removeItem("email")
        });
    };

    const cancel = () => {
        message.error('取消退出登录！');
    };
    function goMainPage(){
        navigate("main")
    }
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.back} onClick={goMainPage}>
                    <img src={logo} alt=""/>
                    <span>XXX校园导航</span>
                </div>
                <div className={s.widget}>
                    <div id="he-plugin-simple" > </div>
                </div>
            </div>
            <div className={s.right}>
                <strong>{randomFont}</strong>
                <div className={s.shift} onClick={shiftTheme} >
                    <div className={s.icon} id="block">
                        <span className={["iconfont",iconName,s.iconStyle].join(" ")}> </span>
                    </div>
                </div>
                <div className={s.version}>{userName?<Popconfirm
                        title="确定要退出登录？"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                    {userName}
                    </Popconfirm>

                    :<DiyButton context={"登录"} bgColor={"#646cff"} color={"#FFF"} ClickEvent={login}/>}</div>
            </div>
        </div>
    );
};

export default NavLayout;