import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const singleMailbox = props.mailboxes.find((box) => (
        box._id === Number(mailboxId)
    ))

    const selectedLetters = props.letters.filter((letter) => (
        Number(letter.letterTo) === Number(mailboxId)
    ))
    return (
        <>
            <h1> Mailbox {singleMailbox._id}</h1>
            <h2> Details</h2>
            <dl>
                <dt> Box Number: </dt>
                <dd>{singleMailbox._id}</dd>
                <dt> Box Size: </dt>
                <dd>{singleMailbox.boxSize}</dd>
                <dt>Letters:</dt>
                <dd>
                    <ul>
                        {selectedLetters.length > 0 ? (
                            selectedLetters.map((letter) => (
                                <li key={letter._id}>
                                    <strong>From:</strong> {letter.letterFrom} <br />
                                    <strong>Message:</strong> {letter.message}
                                </li>
                            ))
                        ) : (
                            <li>No letters yet!</li>
                        )}
                    </ul>
                </dd>
            </dl>

        </>
    )
}


export default MailboxDetails