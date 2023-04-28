import React, {useEffect, useRef, useState} from 'react';
import  s from "./style.module.scss"
import loginImage from "../../assets/images/login-bg-5.jpg"
import Input from "../Components/Input";
import Button from "../Components/Button";
import {http} from "../../http";
import { message } from 'antd';
import {flushSync} from "react-dom";

const SignIn = () => {
    const [count,setCount]=useState(3)
    const [isCool,setIsCool]=useState(false)
    const [formData,setFormData]=useState({
        email:"",
        code:""
    })
    useEffect(()=>{
        const localEmail=localStorage.getItem("email")
        if(localEmail){
            setFormData({
                email:localEmail,
                code:""
            })
        }
    },[])
    const remember=useRef<HTMLInputElement>(null)
    const [messageEmail, contextHolderEmail] = message.useMessage();
    const [messageLogin, contextHolderLogin] = message.useMessage();
    const successEmail = () => {
        messageEmail.open({
            type: 'success',
            content: '发送验证码成功！',
        });
    };
    const successLogin = () => {
        messageLogin.open({
            type: 'success',
            content: '登录成功！',
        });
    };
    useEffect(()=>{
        let id=setInterval(()=>{
            if(count<=1){
                setIsCool(false)
                setCount(3)
                return
            }
            setCount(count=>count-1)
        },1000)
        return ()=>{clearInterval(id)}
    },[count])
    const onSubmit=async (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        await  http.post("/user/sign_in",{
            email:formData.email,
            code:formData.code
        }).then((res)=>{
            successLogin()
        })
        if(remember.current===null){
            return
        }
        if(remember.current.checked){
            localStorage.setItem("email",formData.email)
        }
        else{
            localStorage.removeItem("email")
        }
    }
    const  getValidationCode=async ()=>{
        setIsCool(true)
        await http.post("/validation-code",{
            email:formData.email
        }).then((res)=>{
            successEmail()
        })
    }
    const getEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            email: e.target.value,
            code:""
        })
        
    }
    const getCode=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            email: formData.email,
            code:e.target.value
        })
    }
    return (
        <div className={s.wrapper}>
            <img src={loginImage} alt="login" className={s.loginImage}/>
            {contextHolderLogin}
            <div className={s.context}>
                {contextHolderEmail}
                <div className={s.title}>
                    <p>
                        发现校园中的每一处，提高自己的效率，使大学生活更加有意义。
                    </p>
                </div>
                <form className={s.login} onSubmit={onSubmit}>
                    <h1>登录你的校园用户</h1>
                    <Input placeHolder={"请输入邮箱"} icon={"icon-email"} changeEvent={getEmail} />
                    <div className={s.code}>
                        <Input icon={""} width={"12em"} placeHolder={"请输入验证码"} changeEvent={getCode}/>
                        <Button type={"button"} isCool={isCool} clickEvent={getValidationCode} context={isCool?`请${count}秒后重试`:"获取验证码"} width={"calc(364px - 13em)"}/>
                    </div>
                    <div className={s.remember}>
                        <input type="checkbox" ref={remember} />
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