import UserContext from "../context/userContext"
import { useContext } from "react";

function useAuth() {
    return useContext(UserContext)
}

export default useAuth
