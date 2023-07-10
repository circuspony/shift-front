import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children, needLogin = true }: { children: ReactNode, needLogin?: boolean }) => {
    const { isSignedIn } = useAuth();
    if (isSignedIn === undefined) return <div className="mt-20 mx-auto">Загрузка</div>
    if (needLogin && !isSignedIn || !needLogin && isSignedIn) {
        return <Navigate to="/" />;
    }
    return <>{children}</>;
};