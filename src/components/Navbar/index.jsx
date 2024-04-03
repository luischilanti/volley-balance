import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"

const Navbar = ({ selected }) => {
    return (
        <nav className={`Navbar ${selected}`}>
            <h3>
                <Link to="/">Volley Balance</Link>
            </h3>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <NavLink to="/create">Create</NavLink>
                </li>

                <li>
                    <NavLink to="/rating">Rating</NavLink>
                </li>

                <li>
                    <NavLink to="/confirmation">Confirmation</NavLink>
                </li>

                <li>
                    <NavLink to="/team">Team</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
