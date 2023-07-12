import { findProjects } from "../../../api/findProjects";
import Pagination from "./pagination";
import SmallProjectCard from "../projectPanels/smallProjectCard"
import { useState, useEffect } from "react";

const categories = [{ label: "Все категории", value: "ALL" },
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

const statuses = [
    { label: "Любой", value: "ALL" },
    { label: "Активный", value: "ACTIVE" },
    { label: "Завершенный", value: "FINISHED" },
]

const searchBodyDefault = {
    pagingParams: {
        page: 0,
        size: 3
    },
    filteringParams: {
        title: "",
        category: categories[0].value,
        status: statuses[0].value,
    },
    sorting: {
        title: "ASC",
        creationDate: "ASC",
        targetAmount: "ASC",
        category: "ASC",
        status: "ASC"
    }
}

function ProjectSearch() {
    const [searchBody, setSearchBody] = useState(searchBodyDefault)
    const [projects, setProjects] = useState([])

    const [searchString, setSearchString] = useState("")
    const [currentCategory, setCurrentCategory] = useState(categories[0].value)
    const [currentStatus, setCurrentStatus] = useState(statuses[0].value)


    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const projectSearch = async () => {
        const projectSearchStatus = await findProjects(searchBody)
        if (projectSearchStatus.success) {
            setProjects(projectSearchStatus.data.content)
            setTotalPages(projectSearchStatus.data.pagingParams.totalPages)
        }
    }

    useEffect(() => {
        const pageChanged = searchBody.filteringParams.category === currentCategory && searchBody.filteringParams.status === currentStatus && searchBody.filteringParams.title === searchString
        setSearchBody({ ...searchBody, pagingParams: { ...searchBody.pagingParams, page: pageChanged ? page : 0 }, filteringParams: { title: searchString, status: currentStatus, category: currentCategory } })
        if (!pageChanged) setPage(0)
    }, [searchString, currentStatus, currentCategory, page])

    useEffect(() => {
        projectSearch()
    }, [searchBody])
    return (
        <div className='flex flex-col mt-16 w-full mx-auto max-w-screen-2xl min-h-screen'>
            <input
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                className="text-4xl outline-none bg-gray-100 mb-8" placeholder="Поиск по выбранной категории" />
            <div className="flex">
                <div className="flex flex-col w-3/4">
                    <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 xl:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 w-full">
                            {projects.map((project) =>
                                <SmallProjectCard project={project} />
                            )}
                        </div>
                    </div>
                    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
                </div>
                <div className="w-1/4 pl-4 ">
                    <div className="flex rounded-md flex-col bg-white w-full p-8 ">
                        <span className="my-1 font-bold text-black text-xl">Категории</span>
                        {categories.map((category) =>
                            <div
                                onClick={() => setCurrentCategory(category.value)}
                                className={`my-1 text-gray-500 cursor-pointer ${category.value === currentCategory ? "font-bold" : ""}`}>{category.label}</div>
                        )}
                        <span className="mt-4 mb-1 font-bold text-black text-xl">Статус</span>
                        {statuses.map((status) =>
                            <div
                                onClick={() => setCurrentStatus(status.value)}
                                className={`my-1 text-gray-500 cursor-pointer ${status.value === currentStatus ? "font-bold" : ""}`}>{status.label}</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectSearch
