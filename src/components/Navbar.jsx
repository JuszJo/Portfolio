import "../styles/Navbar.css";

export default function Navbar() {
    return(
        <header>
            <div id="nav-wrap" className="container">
                <nav>
                    <p id="logo">Portfolio</p>
                    <ul>
                        <li className="links"><a href="#first-page">Home</a></li>
                        <li className="links"><a href="#projects-section">Project</a></li>
                        <li className="links"><a href="#contact-section">Contact</a></li>
                    </ul>
                    <div id="menu-wrap">
                        <div id="menu"></div>
                    </div>
                </nav>
            </div>
        </header>
    )
}