import { iProject } from "../../utils/types"

function ProjectDescription({ project }: { project: iProject }) {
    return (
        <div className="flex flex-col">
            <div className="text-2xl font-medium">О проекте</div>
            <div className="w-full py-4 text-justify">{project.description}</div>
            {project?.attachmentIds?.length !== 0 &&
                <>
                    <div className="text-2xl font-medium mt-4">Приложенные изображения</div>
                    <div className="flex flex-row flex-wrap mt-4">
                        {project?.attachmentIds.map((imageId) =>
                            <div className="pr-2 py-2 w-1/2 md:w-1/3 cursor-pointer">
                                <div
                                    style={{ backgroundImage: `url(http://kosterror.ru:8081/api/v1/files/${imageId})` }}
                                    className="bg-cover bg-center bg-gray-400 w-full h-44 rounded-md">

                                </div>
                            </div>
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default ProjectDescription
