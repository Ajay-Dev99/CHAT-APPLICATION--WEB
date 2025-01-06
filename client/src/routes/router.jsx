import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Banner from "../pages/LandingPage";
import LoginPage from "../pages/shared/LoginPage";
import Signup from "../pages/Signup";
import Message from "../pages/Message";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <h1>Error page</h1>,
        children: [
            {
                path: '/',
                element: <Banner />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <Signup />
            }
        ]
    },
    {
        path: 'chatapp',
        element: <Message />
    }


]);