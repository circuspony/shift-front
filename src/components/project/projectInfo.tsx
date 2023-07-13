import { useState } from 'react'
import { iProject } from "../../utils/types"
import ProjectDescription from "./projectDescription"
import ProjectSponsors from "./projectSponsors"

enum ProjectInfoMode {
    DESCRIPTION = 0,
    NEWS = 1,
    SPONSORS = 2

}

function ProjectInfo({ project }: { project: iProject }) {
    const [currentMode, setCurrentMode] = useState(ProjectInfoMode.DESCRIPTION)
    return (
        <>
            <div className="flex flex-col w-full border-y-2 border-custom-gray">
                <div className="project-info-tabs flex text-sm md:text-base overflow-x-scroll md:overflow-x-hidden overflow-hidden text-base w-full max-w-screen-xl mx-auto">
                    <div
                        onClick={() => setCurrentMode(ProjectInfoMode.DESCRIPTION)}
                        className={`transition-all duration-300 font-medium py-6 border-b-4 cursor-pointer px-6 md:px-12 ${currentMode == ProjectInfoMode.DESCRIPTION ? "border-dark-green" : "border-gray-100 hover:border-gray-400 "}`}>
                        Описание
                    </div>
                    <div
                        onClick={() => setCurrentMode(ProjectInfoMode.NEWS)}
                        className={`transition-all duration-300 font-medium py-6 border-b-4 cursor-pointer px-6 md:px-12 ${currentMode == ProjectInfoMode.NEWS ? "border-dark-green" : "border-gray-100 hover:border-gray-400 "}`}>
                        Новости
                    </div>
                    <div
                        onClick={() => setCurrentMode(ProjectInfoMode.SPONSORS)}
                        className={`transition-all duration-300 font-medium py-6 border-b-4 cursor-pointer px-6 md:px-12 ${currentMode == ProjectInfoMode.SPONSORS ? "border-dark-green" : "border-gray-100 hover:border-gray-400 "}`}>
                        Участники
                    </div>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto ">
                <div className="flex px-8 2xl:px-0 flex-col w-full lg:w-3/5 xl:w-2/3 mt-8">
                    {currentMode === ProjectInfoMode.DESCRIPTION ? <>
                        <ProjectDescription project={project} />
                    </> : <></>}
                    {currentMode === ProjectInfoMode.NEWS ? <div className="w-full text-center text-xl py-8">
                        {"Новостей пока нет :("}
                    </div> : <></>}
                    {currentMode === ProjectInfoMode.SPONSORS ? <>
                        <ProjectSponsors />
                    </> : <></>}
                </div>
            </div>
        </>

    )
}

export default ProjectInfo
