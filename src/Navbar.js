import { Link } from "react-router-dom"
export default function Navbar() {
    
    return  (
        <nav className="nav"> 
        <Link to ="/" className = "site-title">ChangeMakers</Link>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/About">About Us</Link>
            </li>
            <li>
                <Link to ="/Organizations">Volunteer</Link>
            </li>
            <li>
                <Link to ="/Map">Locations</Link>
            </li>
        </ul>
        </nav>
    )
}