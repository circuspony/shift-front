import ChecListIcon from "../svg/checkListIcon";
import CoinIcon from "../svg/coinIcon";
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
import { Project } from "../interfaces";
import ButtonWrapper from "../inputs/buttonWrapper";
import UserContext from "../context/userContext";
import { useContext } from "react";
import { calculateTime } from "../../utils";

function ProgressPanel({ project }: { project: Project }) {

    const { isSignedIn } = useContext(UserContext)

    return (
        <>
            <div className="flex items-center">
                <span className="text-3xl font-bold">{project.collected + ""}</span>
                <div className="text-normal-text w-9 ml-1">
                    <CoinIcon />
                </div>
            </div>
            <div className="flex items-center mt-3 w-full">
                <span>{"из " + project.needed}</span>
                <div className="text-normal-text w-5 ml-0.5">
                    <CoinIcon />
                </div>
                <div className="ml-auto">{"Собрано " + Math.floor(project.collected * 100 / project.needed) + "%"}</div>
            </div>
            <div className="relative h-1.5 mt-3 rounded-md w-full bg-gray-400">
                <div
                    style={{ width: Math.floor(project.collected * 100 / project.needed) > 100 ? 100 : Math.floor(project.collected * 100 / project.needed) + "%" }}
                    className={`bg-light-green rounded-md absolute h-1.5`}></div>
            </div>
            <div className="flex itmes-center mt-4 justify-between">
                <div className="flex flex-col">
                    <div className="font-bold">{project.sponsors + " раз"}</div>
                    <div className="text-gray-400">поддержали</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">{calculateTime(project.endDate.getTime(), Date.now())}</div>
                    <div className="text-gray-400">осталось</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">{project.startDate.getDate() + " " + months[project.startDate.getMonth()] + " " + project.startDate.getFullYear()}</div>
                    <div className="text-gray-400">запущен</div>
                </div>
            </div>
            {isSignedIn ? <>
                <div className="flex w-full mt-4">
                    <ButtonWrapper
                        addonClass="py-3 text-xl w-full">
                        <span className="mx-auto">
                            Поддержать проект
                        </span>
                    </ButtonWrapper>
                </div>
            </> : <></>}
            <div className="flex text-sm items-center mt-4 mx-auto cursor-pointer">
                <div className="w-4 mr-1">
                    <ChecListIcon />
                </div>
                <div className="">{project.category}</div>
            </div>
        </>
    )
}

export default ProgressPanel