import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

function ChristmasCard() {
    return (
        <div className="border-2 rounded-lg px-3 py-0.5 w-sm h-sm">
            <h1 className="text-xl">Christmas Card</h1>{/*Jméno projektu*/}
            <h2 className="text-lg">CZ</h2>{/*Jazyky*/}
            <div className="text-4xl inline-flex gap-1"><FaHtml5 /> <FaCss3Alt /></div>{/*Použité technologie*/}
            <p></p>{/*Popis projektu*/}
        </div>
    )
}

export default ChristmasCard