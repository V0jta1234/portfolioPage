//Šklní projekty
import BusinesCard from "./projects/BusinesCard"
import InterestIT from "./projects/InterestIT"
import ChristmasCard from "./projects/ChristmasCard"
//Osobní projekty
import LoginRegister from "./projects/LoginRegister"
import GameStore from "./projects/GameStore"
import Vonavky from "./projects/Vonavky"

function Projects() {
    return (
        <div className="bg-gray-800 p-4 text-white text">
            <div className="mx-3 text-lg">
                <h1 className="text-2xl">Projects</h1>
                <p>Here you will find projects that I made as part of school or in my free time.</p>
                <div className="">
                    <h2 className="text-xl">School projects</h2>
                    <div className="flex gap-2">
                        <BusinesCard />
                        <InterestIT />
                        <ChristmasCard />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl">Personal projects</h2>
                    <div className="flex gap-2">
                        <LoginRegister />
                        <GameStore />
                        <Vonavky />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects