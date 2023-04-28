import React, {useEffect, useRef, useState} from 'react';
import  s from "./style.module.scss"
import loginImage from "../../assets/images/login-bg-5.jpg"
import Input from "../Components/Input";
import Button from "../Components/Button";

const SignIn = () => {
    const [count,setCount]=useState(3)
    const [isCool,setIsCool]=useState(false)
    const [email,setEmail]=useState("")
    useEffect(()=>{
        let id=setInterval(()=>{
            if(count<=0){
                setIsCool(false)
                setCount(3)
                return
            }
            setCount(count=>count-1)
        },1000)
        return ()=>{clearInterval(id)}
    },[count])
    const onSubmit=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
    }
    const getValidationCode=()=>{
        setIsCool(true)
    }
    const getEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    return (
        <div className={s.wrapper}>
            <img src={loginImage} alt="login" className={s.loginImage}/>
            <div className={s.context}>
                <div className={s.title}>
                    <p>
                        发现校园中的每一处，提高自己的效率，使大学生活更加有意义。
                    </p>
                </div>
                <form className={s.login}>
                    <h1>登录你的校园用户</h1>
                    <Input placeHolder={"请输入邮箱"} icon={"icon-email"}/>
                    <div className={s.code}>
                        <Input icon={""} width={"12em"} placeHolder={"请输入验证码"}/>
                        <Button type={"button"} context={"获取验证码"} width={"calc(364px - 13em)"}/>
                    </div>
                    <div className={s.remember}>
                        <input type="checkbox" />
                        <label >记住邮箱</label>
                    </div>
                    <Button type={"submit"} context={"登录"}/>
                    <p className={s.details}>点击「登录」表示已阅读并同意 服务条款</p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;