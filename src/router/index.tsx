import Balance from "../pages/balance";
import EditProfile from "../pages/profile/editprofile";
import Home from "../pages/home";
import Layout from "../components/layout";
import Profile from "../pages/profile/profile";
import Project from "../pages/project";
import { ProtectedRoute } from "./protectedRoute";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import {
    createBrowserRouter,
} from "react-router-dom";
import SearchPage from "../pages/search";

const router = createBrowserRouter(
    [{
        element: <Layout />,
        children: [
            {
                path: "balance",
                element: <ProtectedRoute>
                    <Balance />
                </ProtectedRoute>
            },
            {
                path: "profile",
                element: <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            },
            {
                path: "profile/edit",
                element: <ProtectedRoute>
                    <EditProfile />
                </ProtectedRoute>
            },
            {
                path: "project/:id",
                element: <Project />,
            },
            {
                path: "signin",
                element: <ProtectedRoute needLogin={false}>
                    <SignIn />
                </ProtectedRoute>
            },
            {
                path: "signup",
                element: <ProtectedRoute needLogin={false}>
                    <SignUp />
                </ProtectedRoute>
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "*",
                element: <Home />,
            },
        ]
    }]
);

export default router
