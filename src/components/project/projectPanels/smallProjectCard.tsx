import { Link } from "react-router-dom"
import { ProjectStatus, iProject } from "../../../utils/types"
import CoinIcon from "../../svg/coinIcon"
import { projectCategories } from "../constants"

function SmallProjectCard({ project }: { project: iProject }) {
    return (
        <Link to={`/project/${project.id}`} className="flex flex-col group my-2 text-normal-text hover:text-normal-text bg-white overflow-hidden rounded-md border-custom-gray border-2 ">
            <div
                style={{ backgroundImage: project.avatarId !== undefined ? `url(http://kosterror.ru:8081/api/v1/files/${project.avatarId})` : `url(${project.image})` }}
                className="relative w-full h-56 bg-cover bg-center bg-gray-400">
                <div className="opacity-0 transition-all duration-700 flex w-full h-full bg-light-green text-3xl uppercase group-hover:opacity-70">
                    <span className="my-auto mx-auto">Поддержать проект</span>
                </div>
            </div>
            <div className="flex flex-col px-4">
                <div className="mt-2 underline text-sm cursor-pointer">{projectCategories.find((c) => c.value === project.category)?.label}</div>
                <div className="mt-2 font-bold text-xl line-clamp-2">{project.title}</div>
                <div className="mt-2 text-sm text-gray-400 text-justify line-clamp-3 h-16">{project.summary}</div>
                <div className="relative h-1.5 rounded-md w-full bg-gray-400 mt-8">
                    <div
                        style={{ width: Math.floor(project.collectedAmount * 100 / project.targetAmount) > 100 ? "100%" : Math.floor(project.collectedAmount * 100 / project.targetAmount) + "%" }}
                        className={`bg-light-green rounded-md absolute h-1.5`}></div>
                </div>
                <div className="flex mt-2 mb-4">
                    <div className="flex flex-col">
                        <div className="text-xl text-dark-green">{Math.floor(project.collectedAmount * 100 / project.targetAmount) + "%"}</div>
                        <span className="text-gray-400 text-sm uppercase">{project.status == ProjectStatus.FINISHED ? "Сбор успешен" : "Идет сбор"}</span>
                    </div>
                    <div className="flex flex-col mt-2 ml-auto">
                        <div className="flex text-xl text-black">{project.collectedAmount}

                            <div className="text-normal-text w-5 ml-0.5">
                                <CoinIcon />
                            </div>
                        </div>
                        <span className="text-gray-400 text-sm uppercase ml-auto">Собрано</span>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default SmallProjectCard
