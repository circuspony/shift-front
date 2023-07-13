import { useEffect, useState } from "react";
import { iProfile } from "../../../utils/types";
import Pagination from "../../project/projectSearch/pagination";
import UserCard from "./userCard";
import { findUsers } from "../../../api/requests/findUsers";

function UserModeration() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState<iProfile | null>(null)

    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const userSearch = async () => {
        const userSearchStatus = await findUsers({ pagingParams: { page: page, size: 10 }, name: "", surname: "", patronymic: "" })
        if (userSearchStatus.success) {
            setUsers(userSearchStatus.data.content)
            setTotalPages(userSearchStatus.data.pagingParams.totalPages)
        }
    }
    const refreshPage = () => {
        userSearch()
        setCurrentUser(null)
    }

    useEffect(() => {
        refreshPage()
    }, [page])

    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col w-1/3">
                    {users.map((user: iProfile) => <div
                        onClick={() => { setCurrentUser(user) }}
                        className={`my-2 p-4 rounded-md flex flex-col cursor-pointer w-full text-sm ${currentUser?.id === user.id && "bg-light-gray"}`}>
                        <span className="font-bold my-2">{"ID: " + user.id}</span>
                        <span className="my-2">{user.name + " " + user.surname}</span>

                    </div>)}
                </div>
                <div className="flex flex-col w-2/3 px-8 ml-4">
                    <UserCard user={currentUser} refreshPage={refreshPage} />
                </div>
            </div>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
    )
}

export default UserModeration
