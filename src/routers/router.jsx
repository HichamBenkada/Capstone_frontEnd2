import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact"; 
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import App from "../App";
  
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {path: "/", element: <Home />},
        {path: "/shop", element: <Shop/>},
        {path: "/blog", element: <Blog/>},
        {path: "/about", element: <About/>},
        {path: "/contact", element: <Contact/>},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>},
      ],
    },
  ]);

export default router;