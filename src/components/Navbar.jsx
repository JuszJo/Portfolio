import "../styles/Navbar.css";

export default function Navbar() {
    return(
        <header>
            <div id="nav-wrap" className="container">
                <nav>
                    <p id="logo">Portfolio</p>
                    <ul>
                        <li>Home</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}