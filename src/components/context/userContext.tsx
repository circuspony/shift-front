import React, { ReactElement, useState, Dispatch, SetStateAction, useEffect } from "react";


interface iUserContext {
    isSignedIn: boolean;
    setIsSignedIn: Dispatch<SetStateAction<boolean>>;
}

const UserContext = React.createContext<iUserContext>({
    isSignedIn: false,
    setIsSignedIn: () => { }
});

export const UserContextProvider = ({ token = undefined, children }: { token: string | undefined, children: ReactElement[] }) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        if (token != undefined) {
            setIsSignedIn(true)
        }
    }, [token])
    return (
        <UserContext.Provider value={{
            isSignedIn,
            setIsSignedIn
        }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext