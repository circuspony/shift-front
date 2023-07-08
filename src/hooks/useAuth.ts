import UserContext from "../context/userContext"
import { useContext } from "react";

function useAuth() {
    const { isSignedIn, setIsSignedIn, userInfo, setUserInfo } = useContext(UserContext)
    return { isSignedIn, setIsSignedIn, userInfo, setUserInfo }
}

export default useAuth
