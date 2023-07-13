import { approveProjectRequest } from "../../../api/requests/approveProjectRequest";
import { iRequest } from "../../../utils/types";
import Button from "../../button";

function ProjectRequestCard({ request, refreshPage }: { request: iRequest | null, refreshPage: Function }) {
    const approveProject = async () => {
        const approveStatus = await approveProjectRequest(request?.id, true)
        if (approveStatus.success) {
            refreshPage()
        }
    }
    return (
        <>
            {request?.fullProjectDto && <div className="w-full flex flex-col">
                <h1 className="text-3xl my-4">Просмотр проекта</h1>
                <span className="my-2">
                    <span className="font-bold ">{"ID: "}</span >
                    {request?.fullProjectDto.id}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Название: "}</span >
                    {request?.fullProjectDto.title}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Краткое описание: "}</span >
                    {request?.fullProjectDto.summary}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Полное описание: "}</span >
                    {request?.fullProjectDto.description}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Желаемая сумма: "}</span >
                    {request?.fullProjectDto.targetAmount}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Изображение: "}</span >
                    <img className="h-40" src={"http://kosterror.ru:8081/api/v1/files/" + request?.fullProjectDto?.avatarId} />
                </span>
                <div className="text-xl font-bold my-2">ОДОБРЯЮ?</div>
                <Button
                    onClick={() => { approveProject() }}>
                    <span className="w-full py-4 ">КОНЕЧНО ОДОБРЯЮ</span>
                </Button>
            </div>}
        </>
    )
}

export default ProjectRequestCard
