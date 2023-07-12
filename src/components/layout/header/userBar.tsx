import { Dispatch, SetStateAction } from "react";
import ExitIcon from "../../svg/exiticon";
import SettingsIcon from "../../svg/settingsIcon";
import CoinIcon from "../../svg/coinIcon";
import WalletIcon from "../../svg/walletIcon";
import { Link, useNavigate } from "react-router-dom";
import cookies from "../../../utils/cookies";
import { AuthStatus } from "../../../utils/types";
import useAuth from "../../../hooks/useAuth";
import PersonIcon from "../../svg/personIcon";
import PiggyIcon from "../../svg/piggyIcon";

function UserBar({ setIsSignedIn }: { setIsSignedIn: Dispatch<SetStateAction<AuthStatus>> }) {
    const navigate = useNavigate();
    const { userInfo, isAdmin, isModer } = useAuth()
    return (
        <>
            <div className="flex flex-col mr-4">
                <div className="ml-auto text-sm md:text-base font-medium">{`${userInfo.name} ${userInfo.surname}`}</div>
                <div className="flex ml-auto text-base md:text-xl text-dark-green">{userInfo.money}
                    <div className="w-5 ml-1">
                        <CoinIcon />
                    </div>
                </div>
                <Link to="/balance" className="flex items-center cursor-pointer ml-auto text-normal-text hover:text-normal-text">
                    <div className="w-5 mr-1">
                        <WalletIcon />
                    </div>
                    <span className="text-xs mt-0.5 md:text-sm underline">Пополнить баланс</span>
                </Link>
            </div>
            <div className='group relative'>
                <div
                    onClick={() => navigate("/profile")}
                    className=" w-10 h-10 rounded-full cursor-pointer overflow-hidden">
                    <img src="/images/amogus.jpg" />
                </div>
                <div className="absolute transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible border-custom-gray border-2 bg-white p-2 mt-8 rounded-md top-full -right-2">
                    <div
                        onClick={() => navigate("/profile/edit")}
                        className="flex items-center cursor-pointer w-40 p-2 transition-all duration-300 rounded-md hover:bg-gray-200">
                        <div className="w-5 h-5">
                            <SettingsIcon />
                        </div>
                        <span className="ml-4">Настройки</span>
                    </div>
                    {isModer || isAdmin && <div
                        onClick={() => { }}
                        className="flex items-center cursor-pointer w-40 p-2 transition-all duration-300 rounded-md hover:bg-gray-200">
                        <div className="w-5 h-5">
                            <PersonIcon />
                        </div>
                        <span className="ml-4">Модерация</span>
                    </div>}
                    {isAdmin && <div
                        onClick={() => { }}
                        className="flex items-center cursor-pointer w-40 p-2 transition-all duration-300 rounded-md hover:bg-gray-200">
                        <div className="w-5 h-5">
                            <PiggyIcon />
                        </div>
                        <span className="ml-4">Админка</span>
                    </div>}
                    <div
                        onClick={() => {
                            cookies.remove("accessToken")
                            cookies.remove("refreshToken")
                            setIsSignedIn(false)
                            navigate("/")
                        }
                        }
                        className="flex items-center cursor-pointer w-40 p-2 transition-all duration-300 rounded-md hover:bg-gray-200">
                        <div className="w-5 h-5">
                            <ExitIcon />
                        </div>
                        <span className="ml-4">Выйти</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBar
