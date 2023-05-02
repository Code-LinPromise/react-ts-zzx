import React, {useEffect, useState} from 'react';
import  s from "./style.module.scss"
import logo from "../../assets/images/logo.svg"

const NavLayout = () => {
    const [iconName,setIconName]=useState("icon-taiyang")
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
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <img src={logo} alt=""/>
                <span>XXX校园导航</span>
                <div className={s.widget}>
                    <div id="he-plugin-simple" ></div>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.shift} onClick={shiftTheme} >
                    <div className={s.icon} id="block">
                        <span className={["iconfont",iconName,s.iconStyle].join(" ")}></span>
                    </div>
                </div>
                <span className={s.version}>Version</span>
            </div>
        </div>
    );
};

export default NavLayout;