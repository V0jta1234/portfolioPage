import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function GameStore() {
    return (
        <div className="border-2 rounded-lg px-3 py-0.5 w-sm h-sm">
            <h1 className="text-xl">Game Store</h1>{/*Jméno projektu*/}
            <h2 className="text-lg">CZ</h2>{/*Jazyky*/}
            <div className="text-4xl inline-flex gap-1"><FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaPhp /> <SiMysql /></div>{/*Použité technologie*/}
            <p>Game store for my games.</p>{/*Popis projektu*/}
        </div>
    )
}

export default GameStore