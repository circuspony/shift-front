import { ProjectStatus } from "../../../utils/types"

export const projectCategories = [{ label: "Все категории", value: "ALL" },
{ label: "Кино", value: "CINEMA" },
{ label: "Литература", value: "LITERATURE" },
{ label: "Искусство", value: "ART" },
{ label: "Игры", value: "GAMES" },
{ label: "Музыка", value: "MUSIC" },
{ label: "Спорт", value: "SPORTS" },
{ label: "Путешествия", value: "TRAVEL" },
{ label: "Экология и природа", value: "ECOLOGY_AND_NATURE" },
{ label: "Общественные инициативы", value: "PUBLIC_INITIATIVES" },
{ label: "Благотворительность", value: "CHARITY" }]


export const projectExamples = [
    {
        id: "32",
        title: "Дайте денег на выпивку",
        summary: "Шахтер Антуан очень хочет выпить, но зарплату задерживают уже 4-й месяц. Помогите.",
        description: "Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)",
        image: "https://i2-prod.walesonline.co.uk/lifestyle/nostalgia/article7925152.ece/ALTERNATES/s615/0_coal.jpg",
        status: ProjectStatus.ACTIVE,
        targetAmount: 300000,
        collectedAmount: 100000,
        isApproved: true,
        sponsors: 69,
        creationDate: new Date("2023-04-04"),
        finishDate: new Date("2023-12-12"),
        category: "LITERATURE",
        creator: {
            firstName: "антуан",
            lastName: "антуан",
            avatar: "https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d",
            projectNumber: 9
        }
    },

    {
        id: "32",
        title: "Дайте денег на ёлку",
        summary: "У птичек и зверушек и детишек не хватает денег на ёлочку для отмечания летнего нового года. Власти города отказываются сотрудничать с общиной и не дают ни ёлки, ни палки.",
        description: "Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)",
        image: "https://obninsk.name/news46738.jpg",
        status: ProjectStatus.ACTIVE,
        targetAmount: 300000,
        collectedAmount: 500000,
        isApproved: true,
        sponsors: 69,
        creationDate: new Date("2023-04-04"),
        finishDate: new Date("2023-12-12"),
        category: "LITERATURE",
        creator: {
            firstName: "антуан",
            lastName: "антуан",
            avatar: "https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d",
            projectNumber: 9
        }
    },

    {
        id: "32",
        title: "Дайте денег на лечение ежат",
        summary: "Шахтер Антуан очень хочет вылечить местных ежат, но зарплату задерживают уже 5-й месяц. Помогите.",
        description: "Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)",
        image: "https://sugaring-shellac.ru/ZOOimg/image/catalog/images/articles/jezh-v-domje.jpg",
        status: ProjectStatus.ACTIVE,
        targetAmount: 300000,
        collectedAmount: 200000,
        isApproved: true,
        sponsors: 69,
        creationDate: new Date("2023-04-04"),
        finishDate: new Date("2023-12-12"),
        category: "LITERATURE",
        creator: {
            firstName: "антуан",
            lastName: "антуан",
            avatar: "https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d",
            projectNumber: 9
        }
    }
]