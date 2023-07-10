// import {
//     useParams,
// } from "react-router-dom";
import ProjectCard from "../components/project/project";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

const project = {
    name: "Дайте денег на выпивку",
    shortDescription: "Шахтер Антуан очень хочет выпить, но зарплату задерживают уже 4-й месяц. Помогите.",
    fullDescription: "Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)",
    image: "https://i2-prod.walesonline.co.uk/lifestyle/nostalgia/article7925152.ece/ALTERNATES/s615/0_coal.jpg",
    finished: false,
    needed: 300000,
    collected: 100000,
    sponsors: 69,
    startDate: new Date("2023-04-04"),
    endDate: new Date("2023-12-12"),
    category: "Литература и журналистика",
    creator: {
        firstName: "антуан",
        lastName: "антуан",
        avatar: "https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d",
        projectNumber: 9
    }

}

function ProjectPage() {
    // let params = useParams();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <ProjectCard
                project={project}
            />
        </>
    )
}

export default ProjectPage