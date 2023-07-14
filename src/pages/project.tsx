import { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { getProject } from "../api/requests/getProject";
import { projectExamples } from "../components/project/constants";
import ProjectCard from "../components/project/project";
import { iProject } from "../utils/types";
import { getUserById } from '../api/requests/getUserById';

function ProjectPage() {
    const params = useParams()
    const { pathname } = useLocation();
    const [project, setProject] = useState<iProject | null>(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const loadData = async () => {
        if (params.id) {
            const projectStatus = await getProject(params.id)
            const creatorStatus = await getUserById(projectStatus?.data?.authorId)
            if (projectStatus.success && creatorStatus.success) {
                setProject({ ...projectExamples[0], ...projectStatus.data, creator: { ...creatorStatus.data } })
            }
            else {
                setProject(projectExamples[0])
            }
        }
    }
    useEffect(() => {
        loadData()
    }, []);
    return (
        <>
            {project && <ProjectCard
                project={project}
                updateProject={(newInfo: iProject) => setProject({ ...project, ...newInfo })}
            />}
        </>

    )
}

export default ProjectPage
