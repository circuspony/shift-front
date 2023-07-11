import Header from "./header";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../context/userContext";

function Layout() {
    return (<UserContextProvider>
        <Header />
        <Outlet />
    </UserContextProvider>
    )
}

export default Layout
