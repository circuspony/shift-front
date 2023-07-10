import Button from "../../button"
import { Link, useNavigate } from "react-router-dom";
import UserBar from "./userBar";
import PiggyIcon from "../../svg/piggyIcon";
import useAuth from "../../../hooks/useAuth";

function Header() {
    const { isSignedIn, setIsSignedIn } = useAuth()
    const navigate = useNavigate();
    return (
        <header className="bg-white w-full">
            <div className='flex items-center max-w-screen-2xl w-full mx-auto py-4 px-8 2xl:px-0'>

                <Link to="/" className="flex items-center text-normal-text hover:text-normal-text">
                    <div className="w-8 md:w-12">
                        <PiggyIcon />
                    </div>
                    <span className="text-xl md:text-3xl font-bold mt-1 ml-2">ДАЙДЕНЕГ!</span>
                </Link>
                {isSignedIn ? <div className="flex items-center ml-auto">
                    <UserBar
                        setIsSignedIn={setIsSignedIn}
                    />
                </div> :
                    <Button onClick={() => {
                        navigate("/signin")
                    }} addonClass="flex py-2 px-8 ml-auto">
                        <div>{"Войти"}</div>
                    </Button>}
            </div>
        </header>

    )
}

export default Header
