import React from 'react';
import NavLayout from "../../layout/NavLayout";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div >
            <NavLayout/>
            <Outlet/>
        </div>
    );
};

export default Home;