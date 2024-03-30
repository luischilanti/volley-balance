import { Link } from "react-router-dom"

const Home = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/create">Create</Link>
            </li>
            <li>
                <Link to="/rating">Rating</Link>
            </li>
            <li>
                <Link to="/team">Team</Link>
            </li>
            <li>
                <Link to="/confirmation">Confirmation</Link>
            </li>
        </ul>
    )
}

export default Home
