import CoinIcon from "../svg/coinIcon"
import { calculateTime } from "../../utils/calculateTime";

const sponsors = new Array(4).fill({
    name: "Андреус Андреус",
    avatar: "https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400",
    sum: 999,
    message: "Мне так жаль!",
    date: new Date("2023-07-03")
})

function ProjectSponsors({ }) {
    return (
        <>
            {sponsors.map((sponsor) => <div className="flex mb-4 items-center bg-white rounded-md p-8 border-2 border-custom-gray">
                <img className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg" src={sponsor.avatar} />
                <div className="flex flex-col ml-6 ">
                    <span className="text-sm md:text-xl font-medium">{sponsor.name}</span>
                    <span className="flex text-base md:text-2xl text-gray-400 mt-2">{"Внес " + sponsor.sum}
                        <div className="text-normal-text w-5 ml-0.5">
                            <CoinIcon />
                        </div>
                    </span>
                    <span className="text-sm md:text-base mt-2">{sponsor.message}</span>
                </div>
                <div className="text-sm md:text-base ml-auto text-gray-400">
                    {calculateTime(Date.now(), sponsor.date.getTime()) + " назад"}
                </div>
            </div>)}
        </>
    )
}

export default ProjectSponsors
