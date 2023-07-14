
import { Link } from "react-router-dom"
import { iProfile } from "../../utils/types"

function ProjectCreator({ creator }: { creator: iProfile }) {
    return (
        <div className="flex items-center my-8">
            <img className="w-20 h-20 rounded-md shadow-lg" src={creator?.avatarId ? "http://kosterror.ru:8081/api/v1/files/" + creator?.avatarId : "/images/amogus.jpg"} />
            <div className="flex ml-4 flex-col">
                <span className="text-black font-bold uppercase">Автор</span>
                <Link to={`/user/${creator.id}`} className="my-1">
                    <span className="whitespace-nowrap text-dark-green hover:text-dark-green">{creator.name + " " + creator.surname}</span>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCreator
