import React from 'react';
import s from "./style.module.scss"
import SearchMain from "../Components/SearchMain";
import KindCard from "../Components/KindCard";
import logo from "../../assets/images/logo.svg"

type CardInfo={
    iconSrc:string,
    title:string,
    details:string,
    buttonTitle:string,
    infoList:string[]
}
const Direction = () => {
    const cardInfo:CardInfo[]=[

    ]
    return (
        <div className={s.wrapper}>
            <div className={s.bgBecome}></div>
            <SearchMain/>
            <div className={s.kindCard}>
                <div></div>
                <div className={s.card}>
                    <KindCard title={"Best Value"} details={"Exam & Preparation bundle"}
                              buttonTitle={"Pre-Order Now"} infoList={["1","2","3"]}
                              iconSrc={logo}
                    />
                </div>
            </div>
        </div>
    );
};

export default Direction;