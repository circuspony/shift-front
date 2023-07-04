import { Dispatch, SetStateAction } from "react";
import ExitIcon from "../../svg/exiticon";
import Cookies from 'universal-cookie';
import SettingsIcon from "../../svg/settingsIcon";


function UserBar({ setIsSignedIn }: { setIsSignedIn: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className='ml-auto group relative'>
            <div className=" w-10 h-10 peer rounded-full cursor-pointer overflow-hidden">
                <img src="/images/amogus.jpg" />
            </div>
            <div className="absolute transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible border-custom-grey border-2 bg-white p-2 mt-4 rounded-md top-full -right-2">
                <div
                    onClick={() => {
                    }
                    }
                    className="flex items-center cursor-pointer w-40 p-2 transition-all duration-300 rounded-md hover:bg-gray-200">
                    <div className="w-5 h-5">
                        <SettingsIcon />
                    </div>
                    <span className="ml-4">Настройки</span>
                </div>

                <div
                    onClick={() => {
                        const cookies = new Cookies();
                        cookies.remove("token")
                        setIsSignedIn(false)
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
    )
}

export default UserBar
