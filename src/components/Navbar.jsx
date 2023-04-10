import "../styles/Navbar.css";

export default function Navbar() {
    return(
        <header>
            <div id="nav-wrap" className="container">
                <nav>
                    <p id="logo">Portfolio</p>
                    <ul>
                        <li className="links">Home</li>
                        <li className="links">Project</li>
                        <li className="links">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}