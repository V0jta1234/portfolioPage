import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Vonavky() {
    return (
        <div className="border-2 rounded-lg px-3 py-0.5 w-sm h-sm">
            <h1 className="text-xl">Fragnance reviews</h1>{/*Jméno projektu*/}
            <h2 className="text-lg">CZ</h2>{/*Jazyky*/}
            <div className="text-3xl inline-flex"><FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaPhp /> <SiMysql /></div>{/*Použité technologie*/}
            <p>Here are my reviews of parfums.</p>{/*Popis projektu*/}
        </div>
    )
}

export default Vonavky