import { getProject } from "../api/getProject";
import ProjectCard from "../components/project/project";
import { ProjectStatus } from "../utils/types";
import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { Project } from "../utils/types";

const defaultProject = {
    title: "Дайте денег на выпивку",
    summary: "Шахтер Антуан очень хочет выпить, но зарплату задерживают уже 4-й месяц. Помогите.",
    description: "Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)",
    image: "https://i2-prod.walesonline.co.uk/lifestyle/nostalgia/article7925152.ece/ALTERNATES/s615/0_coal.jpg",
    status: ProjectStatus.ACTIVE,
    targetAmount: 300000,
    isApproved: true,
    collectedAmount: 100000,
    sponsors: 69,
    creationDate: new Date("2023-04-04"),
    finishDate: new Date("2023-12-12"),
    category: "Литература и журналистика",
    creator: {
        firstName: "антуан",
        lastName: "антуан",
        avatar: "https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d",
        projectNumber: 9
    }

}

function ProjectPage() {
    const params = useParams()
    const { pathname } = useLocation();
    const [project, setProject] = useState<Project | null>(null)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const loadData = async () => {
        if (params.id) {
            const projectStatus = await getProject(params.id)
            console.log("projectStatus")
            setProject({ ...defaultProject, ...projectStatus.data })

        }
    }
    useEffect(() => {
        loadData()
    }, []);
    return (
        <>
            {project && <ProjectCard
                project={project}
            />}
        </>

    )
}

export default ProjectPage
