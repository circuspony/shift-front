
import SmallStatusBar from "./smallStatusBar"
import { Helmet } from "react-helmet";
import { Project } from "../../utils/types";
import ProgressPanel from "./progressPanel";
import ProjectCreator from "./projectCreator";
import ProjectInfo from "./projectInfo";

function ProjectCard({ project }: { project: Project }) {

    return (
        <div className="flex flex-col w-full h-full min-h-screen bg-gray-100 pb-20">
            <Helmet>
                <title>{project.name}</title>
                <meta name="description" content={project.shortDescription} />
            </Helmet>
            <div className="flex px-8 2xl:px-0 flex-col w-full mt-8 max-w-screen-xl mx-auto">
                <SmallStatusBar finished={project.finished} />
                <h1 className="my-4 text-3xl font-bold">{project.name}</h1>
                <p className="mb-4">{project.shortDescription}</p>
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div
                        style={{ backgroundImage: `url(${project.image})` }}
                        className="rounded-md w-full lg:w-3/5 xl:w-2/3 h-64 lg:h-80 xl:h-[30rem] bg-cover bg-center bg-gray-200 md:mr-4">

                    </div>
                    <div className="flex flex-col mt-8 lg:mt-0 lg:px-8 w-full lg:w-2/5 xl:w-1/3">
                        <ProgressPanel project={project} />
                    </div>
                </div>
                <ProjectCreator creator={project.creator} />
            </div>
            <ProjectInfo project={project} />
        </div>
    )
}

export default ProjectCard
