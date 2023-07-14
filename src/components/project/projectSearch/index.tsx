import { findProjects } from "../../../api/requests/findProjects";
import Pagination from "./pagination";
import SmallProjectCard from "../projectPanels/smallProjectCard"
import { useState, useEffect } from "react";
import { projectCategories } from "../constants";

const statuses = [
    { label: "Любой", value: "ALL" },
    { label: "Активный", value: "ACTIVE" },
    { label: "Завершенный", value: "FINISHED" },
]

const searchBodyDefault = {
    pagingParams: {
        page: 0,
        size: 6
    },
    filteringParams: {
        title: "",
        category: projectCategories[0].value,
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
    const [currentCategory, setCurrentCategory] = useState(projectCategories[0].value)
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
        if (!pageChanged) {
            setTotalPages(1)
            setPage(0)
        }
    }, [searchString, currentStatus, currentCategory, page])

    useEffect(() => {
        projectSearch()
    }, [searchBody])
    return (
        <div className='flex flex-col mt-16 w-full mx-auto max-w-screen-2xl min-h-screen px-8 2xl:px-0'>
            <input
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                className="text-xl md:text-4xl outline-none bg-gray-100 mb-8" placeholder="Поиск по выбранной категории" />
            <div className="flex flex-wrap flex-wrap-reverse md:flex-nowrap">
                <div className="flex flex-col w-full md:w-3/5 xl:w-3/4">
                    <div className="flex flex-col w-full max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 w-full">
                            {projects.map((project) =>
                                <SmallProjectCard project={project} />
                            )}
                        </div>
                    </div>
                    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
                </div>
                <div className="w-full mb-4 md:w-2/5 xl:w-1/4 md:pl-4 ">
                    <div className="flex rounded-md flex-col bg-white w-full p-5 md:p-8">
                        <span className="my-1 font-bold text-black text-base md:text-xl">Категории</span>
                        {projectCategories.map((category) =>
                            <div
                                onClick={() => setCurrentCategory(category.value)}
                                className={`my-1 text-xs md:text-base text-gray-500 cursor-pointer ${category.value === currentCategory ? "font-bold" : ""}`}>{category.label}</div>
                        )}
                        <span className="mt-4 mb-1 font-bold text-black text-base md:text-xl">Статус</span>
                        {statuses.map((status) =>
                            <div
                                onClick={() => setCurrentStatus(status.value)}
                                className={`my-1 text-xs md:text-base text-gray-500 cursor-pointer ${status.value === currentStatus ? "font-bold" : ""}`}>{status.label}</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectSearch
