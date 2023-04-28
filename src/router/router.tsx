import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/user",
      element: <User/>,
    },
  {
    path:"/sign_in",
    element:<SignIn/>
  }
]);

