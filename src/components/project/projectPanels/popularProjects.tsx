import { projectExamples } from "../constants"
import SmallProjectCard from "./smallProjectCard"

function PopularProjects() {
    return (
        <div className="flex flex-col mt-16 w-full max-w-screen-xl mx-auto mb-20 px-8 xl:px-0">
            <div className="text-3xl font-bold mb-4">Дай денег этим популярным проектам</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 w-full">
                {projectExamples.map((project) =>
                    <SmallProjectCard project={project} />
                )}
            </div>
        </div>
    )
}

export default PopularProjects
