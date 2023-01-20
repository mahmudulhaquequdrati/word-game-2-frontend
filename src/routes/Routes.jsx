import { createBrowserRouter } from "react-router-dom";
import Days from "../components/days/Days";
import FinalResult from "../components/final-result/FinalResult";
import Home from "../components/home/Home";

import Login from "../components/login/Login";
import Register from "../components/register/Register";

import WordMatch from "../components/word-match/WordMatch";

const user = localStorage.getItem("user") ? true : false;

export const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <Days></Days> : <Login></Login>,
  },
  { path: "/home", element: <Home></Home> },
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
  {
    path: "/word-match",
    element: <WordMatch></WordMatch>,
  },
  {
    path: "/result",
    element: <FinalResult></FinalResult>,
  },
]);
