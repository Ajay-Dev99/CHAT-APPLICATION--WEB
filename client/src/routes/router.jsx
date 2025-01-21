import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Banner from "../pages/LandingPage";
import LoginPage from "../pages/shared/LoginPage";
import Signup from "../pages/Signup";
import Message from "../pages/message/Chatpage";
import ChatLayout from "../layouts/ChatLayout";
import AboutPage from "../pages/AboutPage";

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
            },
            {
                path: "about",
                element: <AboutPage />
            },

        ]
    },
    {
        path: 'chat',
        element: <ChatLayout />,
        errorElement: <h1>chat route error</h1>,
        children: [
            {
                path: '',
                element: <Message />
            }
        ]
    }



]);