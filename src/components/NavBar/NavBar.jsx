import { Link } from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mailboxes'>Mailboxes</Link>
                </li>
                <li>
                    <Link to='/mailboxes/new-mailbox'>Create New Mailbox</Link>
                </li>
                <li>
                    <Link to='/letters/new-letter'>Send A Letter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar