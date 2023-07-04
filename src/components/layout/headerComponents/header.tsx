import ButtonWrapper from "../../inputs/buttonWrapper"
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import UserBar from "./userBar";
import PiggyIcon from "../../svg/piggyIcon";

function Header() {
    const { isSignedIn, setIsSignedIn } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <div className="bg-white w-full">
            <div className='flex items-center max-w-screen-2xl w-full mx-auto py-4'>

                <Link to="/" className="flex items-center text-normal-green-text hover:text-normal-green-text">
                    <div className="w-12">
                        <PiggyIcon />
                    </div>
                    <span className="text-3xl font-bold mt-1 ml-2">ДАЙДЕНЕГ!</span>
                </Link>
                {isSignedIn ? <>
                    <UserBar
                        setIsSignedIn={setIsSignedIn}
                    />
                </> :
                    <ButtonWrapper onClick={() => {
                        navigate("/signin")
                    }} addonClass="flex py-2 px-8 ml-auto">
                        <div>{"Войти"}</div>
                    </ButtonWrapper>}
            </div>
        </div>

    )
}

export default Header
