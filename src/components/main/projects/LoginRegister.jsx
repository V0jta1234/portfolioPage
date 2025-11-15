import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function LoginRegister() {
    return (
        <a className="border-2 rounded-lg px-3 py-0.5 w-sm h-sm" href="https://bastlv.wz.cz/projekty/Vlastni_logReg/index.php?s=notLogin">
            <h1 className="text-xl">Basic login and register system</h1>{/*Jméno projektu*/}
            <h2 className="text-lg">CZ</h2>{/*Jazyky*/}
            <div className="text-4xl inline-flex gap-1"><FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaPhp /> <SiMysql /></div>{/*Použité technologie*/}
            <p>Simple application for user login and registration. I wanted to try working with a database.</p>{/*Popis projektu*/}
        </a>
    )
}

export default LoginRegister