import { useEffect, useState } from "react";
import { findProjectRequests } from "../../../api/requests/findProjectRequests";
import { iProject, iRequest } from "../../../utils/types";
import Pagination from "../../project/projectSearch/pagination";
import ProjectRequestPage from "./requestPage";

function ProjectModeration() {
    const [requests, setRequests] = useState([])
    const [currentRequest, setCurrentRequest] = useState<iRequest | null>(null)

    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const requestSearch = async () => {
        const requestSearchStatus = await findProjectRequests({ page: page, size: 10 })
        if (requestSearchStatus.success) {
            setRequests(requestSearchStatus.data.content)
            setTotalPages(requestSearchStatus.data.pagingParams.totalPages)
        }
    }

    useEffect(() => {
        setCurrentRequest(null)
    }, [page])

    useEffect(() => {
        requestSearch()
    }, [currentRequest])
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col w-1/3">
                    {requests.map((request: { id: string, creationDate: Date, fullProjectDto: iProject }) => <div
                        onClick={() => { setCurrentRequest(request) }}
                        className={`my-2 p-4 rounded-md flex flex-col cursor-pointer w-full text-sm ${currentRequest?.id === request.id ? "bg-light-gray" : ""}`}>
                        <span className="font-bold my-2">{"ID: " + request.fullProjectDto.id}</span>
                        <span className="my-2">{request.fullProjectDto.title}</span>

                    </div>)}
                </div>
                <div className="flex flex-col w-2/3 px-8">
                    <ProjectRequestPage request={currentRequest} setCurrentRequest={setCurrentRequest} />
                </div>
            </div>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
    )
}

export default ProjectModeration
