import PopularProjects from "../components/project/projectPanels/popularProjects"
import PiggyIcon from "../components/svg/piggyIcon"

function Home() {
    return (
        <div
            className="w-full h-full bg-gray-100">
            <div className='flex flex-col w-full mx-auto max-w-screen-2xl'>
                <div className="flex flex-col w-72 md:w-96 mx-auto mt-16">
                    <PiggyIcon />
                    <span className="text-5xl md:text-6xl decoration-wavy text-black  font-bold mx-auto">ДАЙДЕНЕГ!*</span>
                    <span className="text-sm ml-auto md:mr-4">*пожалуйста</span>
                </div>
                <PopularProjects />
            </div>
        </div>
    )
}

export default Home
