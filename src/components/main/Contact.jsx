import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className="bg-gray-800 p-4 text-white text">
            <div className="mx-3 text-lg">
                <h1 className="text-2xl">Contact</h1>
                <p>You can contact me here:</p>
                <div className="flex gap-2 hover:cursor-pointer">
                    <a href="mailto:vojtech.baslt8@gmail.com" className="text-6xl flex flex-col items-center gap-2 " >
                        <MdEmail />
                        <a className="text-lg" href="mailto:vojtech.baslt8@gmail.com">Email: vojtech.bastl8@gmail.com</a>
                    </a>
                    <a className="text-6xl flex flex-col items-center gap-2 " href="https://www.linkedin.com/in/vojt%C4%9Bch-bastl-98427a367/">
                        <FaLinkedin />
                        <p className="text-lg">LinkedIn: Vojtěch Bastl</p>
                    </a>
                    <a className="text-6xl flex flex-col items-center gap-2" href="https://github.com/V0jta1234">
                        <FaGithub />
                        <p className="text-lg">GitHub: V0jta1234</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact