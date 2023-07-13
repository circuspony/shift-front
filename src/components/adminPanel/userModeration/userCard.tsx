import { useState } from "react";
import { changeUserRole } from "../../../api/requests/changeUserRole";
import { iProfile } from "../../../utils/types";
import Button from "../../button";
import CustomSelect from "../../inputs/select";

const roles = [{ label: "Пользователь", value: "ROLE_USER" }, { label: "Модератор", value: "ROLE_MODER" }, { label: "Админ", value: "ROLE_ADMIN" }]

function UserCard({ user, refreshPage }: { user: iProfile | null, refreshPage: Function }) {
    const [role, setRole] = useState(roles.find(r => r.value === user?.role) || roles[0])

    const changeRole = async () => {
        const approveStatus = await changeUserRole(user?.id, role?.value)
        if (approveStatus.success) {
            refreshPage()
        }
    }
    return (
        <>
            {user && <div className="w-full flex flex-col">
                <h1 className="text-3xl my-4">Просмотр пользователя</h1>
                <span className="my-2">
                    <span className="font-bold ">{"ID: "}</span >
                    {user.id}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Имя: "}</span >
                    {user.name}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Отчество: "}</span >
                    {user.patronymic}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Фамилия: "}</span >
                    {user.surname}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Почта: "}</span >
                    {user.email}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Биография: "}</span >
                    {user.bio}
                </span>
                <span className="my-2">
                    <span className="font-bold ">{"Изображение: "}</span >
                    <img className="h-40" src={user?.avatarId ? "http://kosterror.ru:8081/api/v1/files/" + user?.avatarId : "/images/amogus.jpg"} />
                </span>
                <div className="text-xl font-bold mt-2">ОДОБРЯЮ?</div>
                {role &&
                    <>
                        <CustomSelect
                            option={role}
                            setOption={setRole}
                            selectArray={roles}
                        />
                        <Button
                            onClick={() => { changeRole() }}
                            className="mt-4">
                            <span className="uppercase w-full py-4">Задать роль</span>
                        </Button>
                    </>}

            </div>}
        </>
    )
}

export default UserCard
