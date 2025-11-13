function NavBar() {
    return (
        <nav className="bg-gray-800 p-4 text-white text-2xl">
            <ul className="flex space-x-4 justify-between mx-3 my-2">
                <div>
                    <li><a href="#home" className="hover:underline">Vojtěch Bastl</a></li>
                </div>
                <div className="flex space-x-4 ">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar