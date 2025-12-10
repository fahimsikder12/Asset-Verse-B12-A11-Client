import { createBrowserRouter } from "react-router";
import RootLayout from "../context/AuthContext";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout, 
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])