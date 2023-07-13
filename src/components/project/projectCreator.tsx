
import { Link } from "react-router-dom"
import { iCreator } from "../../utils/types"

function ProjectCreator({ creator }: { creator: iCreator }) {
    return (
        <div className="flex items-center my-8">
            <img className="w-20 h-20 rounded-md shadow-lg" src={creator.avatar} />
            <div className="flex ml-4 flex-col">
                <span className="text-black font-bold uppercase">Автор</span>
                <Link to="/" className="my-1">
                    <span className="whitespace-nowrap text-dark-green hover:text-dark-green">{creator.firstName + " " + creator.lastName}</span>
                </Link>
                <span className="text-sm">{creator.projectNumber + " проектов"}</span>
            </div>
        </div>
    )
}

export default ProjectCreator
