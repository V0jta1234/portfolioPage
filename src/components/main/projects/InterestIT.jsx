import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiArduino } from "react-icons/si";

function InterestIT() {
    return (
        <a className="border-2 rounded-lg px-3 py-0.5 w-sm h-sm" onclick="https://bastlv.wz.cz/projekty/Arduino/zajemMainPage.html">
            <h1 className="text-xl">Interest in IT</h1>{/*Jméno projektu*/}
            <h2 className="text-lg">CZ</h2>{/*Jazyky*/}
            <div className="text-4xl inline-flex gap-1"><FaHtml5 /> <FaCss3Alt /> <SiArduino /></div>{/*Použité technologie*/}
            <p>My interest in IT. For me it is Arduino and here I present you some of my projects.</p>{/*Popis projektu*/}
        </a>
    )
}

export default InterestIT