import { createBrowserRouter } from "react-router-dom";
import Days from "../components/days/Days";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export const router = createBrowserRouter([
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
