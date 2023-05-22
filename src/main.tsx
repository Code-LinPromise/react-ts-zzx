import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import { router } from './router/router';
import "./assets/main.scss"
import 'antd/dist/reset.css';
import "./assets/vars.scss"
import  "./assets/Iconfont/iconfont.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)