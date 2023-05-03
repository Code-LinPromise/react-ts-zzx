import React from 'react';
import NavLayout from "../../layout/NavLayout";
import {Outlet} from "react-router-dom";
import s from "./style.module.scss"
import heart from "../../assets/images/heart.svg";

const Home = () => {
    return (
        <div>
            <NavLayout/>
            <Outlet/>
            <div className={s.footer}>
                <img src={heart} alt=""/>
                <p>本网站由xxx团队维护并运行，感谢您的关注和使用</p>
            </div>
        </div>
    );
};

export default Home;