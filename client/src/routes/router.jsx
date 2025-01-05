import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Banner from "../pages/Banner";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <h1>Error page</h1>,
        children: [
            {
                path: '/',
                element: <Banner />
            }
        ]
    },

]);