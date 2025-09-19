import { Link } from 'react-router'

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <li key={currentMailbox.boxOwner} className='mail-box'>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                        {currentMailbox.boxOwner}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList