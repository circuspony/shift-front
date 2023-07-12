import { Project } from "../../utils/types"
const images = ["https://eastbayexpress.com/wp-content/uploads/sites/15/2018/05/antwon.jpg", "https://i.ytimg.com/vi/GtUf-vWJAHQ/maxresdefault.jpg", "https://freight.cargo.site/w/4397/q/75/i/6a703fbc0ac85f75027a97d0ea183d01325a4c65f0be22a6616d40b49c5187db/fp100antwon041-2.jpg", "https://media.gettyimages.com/id/3291374/photo/miners-straight-from-the-pit-taking-their-milk-break-in-the-sunshine-at-a-new-milk-bar-opened-at.jpg?s=612x612&w=gi&k=20&c=xX_JsK_-_WIF_vvy-6u8F7maGS2u8rjcGc75h5_Y3Ro="]

function ProjectDescription({ project }: { project: Project }) {
    return (
        <div className="flex flex-col">
            <div className="text-2xl font-medium">О проекте</div>
            <div className="w-full py-4 text-justify">{project.description}</div>
            <div className="text-2xl font-medium mt-4">Приложенные изображения</div>
            <div className="flex flex-row flex-wrap mt-4">
                {images.map((image) =>
                    <div className="pr-2 py-2 w-1/2 md:w-1/3 cursor-pointer">

                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="bg-cover bg-center bg-gray-400 w-full h-44 rounded-md">

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectDescription
