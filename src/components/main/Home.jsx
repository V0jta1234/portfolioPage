import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiArduino } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Home(){
    return(
        <div className="bg-gray-800 text-white p-4">
            <div className="mx-3 py-0.5">
                <h1 className="text-2xl">Technologie</h1>
                <div className="text-5xl flex gap-1">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <IoLogoJavascript />
                    <FaPhp />
                    <SiMysql />
                    <SiCplusplus />
                    <TbBrandCSharp />
                    <SiArduino />
                    <FaGitAlt />
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default Home