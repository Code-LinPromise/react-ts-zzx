import {
    createBrowserRouter,Navigate
} from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import SignIn from "../pages/SignIn";
import Direction from "../pages/Direction"
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:(<Navigate to="/main"/>)
    },
    {
        path: "/",
        element:<Home/>,
        children:[
            {
                path:"main",
                element:<MainPage/>
            },
            {
                path:"direction",
                element:<Direction/>
            }
        ]
    },
    {
        path: "/user",
        element: <User/>,
    },
    {
        path:"/sign_in",
        element:<SignIn/>
    },

]);

