import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ProjectModeration from "./projectModeration";
import UserModeration from "./userModeration";
import PromoGeneration from "./promoGeneration";

enum AdminModes {
    MODERATION = "MODERATION",
    USER_ROLES = "USER_ROLES",
    PROMOCODES = "PROMOCODES"
}
function AdminPanel() {
    const { isAdmin, isModer } = useAuth()
    const [mode, setMode] = useState(AdminModes.MODERATION)

    if (!isAdmin && !isModer) {
        return <>
            <Navigate to="/" replace={true}
            />
        </>
    }
    return (
        <div className="flex flex-col w-full max-w-5xl mx-auto">
            <div className="flex mb-4">
                <div
                    onClick={() => setMode(AdminModes.MODERATION)}
                    className={`cursor-pointer font-semibold rounded-md py-2 px-8 ${mode === AdminModes.MODERATION ? "bg-light-gray " : ""} text-normal-text hover:text-normal-text`}>
                    Модерация проектов
                </div>
                {isAdmin && <div
                    onClick={() => setMode(AdminModes.USER_ROLES)}
                    className={`cursor-pointer font-semibold rounded-md py-2 px-8 ml-8 ${mode === AdminModes.USER_ROLES ? "bg-light-gray " : ""} text-normal-text hover:text-normal-text`}>
                    Модерация пользователей
                </div>}
                {isAdmin && <div
                    onClick={() => setMode(AdminModes.PROMOCODES)}
                    className={`cursor-pointer font-semibold rounded-md py-2 px-8 ml-8 ${mode === AdminModes.PROMOCODES ? "bg-light-gray " : ""} text-normal-text hover:text-normal-text`}>
                    Промокоды
                </div>}
            </div>
            {mode === AdminModes.MODERATION && <ProjectModeration />}
            {mode === AdminModes.USER_ROLES && isAdmin && <UserModeration />}
            {mode === AdminModes.PROMOCODES && isAdmin && <PromoGeneration />}
        </div>
    )
}

export default AdminPanel
