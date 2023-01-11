import { createBrowserRouter } from "react-router-dom";
import Days from "../components/days/Days";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/days",
    element: <Days></Days>,
  },
]);
