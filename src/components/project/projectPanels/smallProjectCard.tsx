import { Link } from "react-router-dom"
import { Project } from "../../interfaces"
import CoinIcon from "../../svg/coinIcon"

function SmallProjectCard({ project }: { project: Project }) {
    return (
        <Link to="/project/33" className="flex flex-col group my-2 text-normal-text hover:text-normal-text bg-white overflow-hidden rounded-md border-custom-gray border-2 ">
            <div
                style={{ backgroundImage: `url(${project.image})` }}
                className="relative w-full h-56 bg-cover bg-center bg-gray-400">
                <div className="opacity-0 transition-all duration-700 flex w-full h-full bg-light-green text-3xl uppercase group-hover:opacity-70">
                    <span className="my-auto mx-auto">Поддержать проект</span>
                </div>
            </div>
            <div className="flex flex-col px-4">
                <div className="mt-2 underline text-sm cursor-pointer">{project.category}</div>
                <div className="mt-2 font-bold text-xl line-clamp-2">{project.name}</div>
                <div className="mt-2 text-sm text-gray-400 text-justify line-clamp-3 h-16">{project.shortDescription}</div>
                <div className="relative h-1.5 rounded-md w-full bg-gray-400 mt-8">
                    <div
                        style={{ width: Math.floor(project.collected * 100 / project.needed) > 100 ? "100%" : Math.floor(project.collected * 100 / project.needed) + "%" }}
                        className={`bg-light-green rounded-md absolute h-1.5`}></div>
                </div>
                <div className="flex mt-2 mb-4">
                    <div className="flex flex-col">
                        <div className="text-xl text-dark-green">{Math.floor(project.collected * 100 / project.needed) + "%"}</div>
                        <span className="text-gray-400 text-sm uppercase">{project.finished ? "Сбор успешен" : "Идет сбор"}</span>
                    </div>
                    <div className="flex flex-col mt-2 ml-auto">
                        <div className="flex text-xl text-black">{project.collected}

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
