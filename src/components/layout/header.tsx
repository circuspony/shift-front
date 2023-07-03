import ButtonWrapper from "../inputs/buttonWrapper"
import { useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

function Header() {
    const { isSignedIn, setIsSignedIn } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <div className='flex max-w-screen-2xl w-full mx-auto py-4'>
            <ButtonWrapper onClick={() => {
                if (isSignedIn) {
                    setIsSignedIn(false)
                    const cookies = new Cookies();
                    cookies.remove("token")
                }
                else {
                    navigate("/signin")
                }
            }} addonClass="py-2.5 px-8 ml-auto">
                <div>{isSignedIn ? "Выйти" : "Войти"}</div>
            </ButtonWrapper>
        </div>
    )
}

export default Header
