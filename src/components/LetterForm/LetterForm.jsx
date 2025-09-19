import { useState } from 'react'
import { useNavigate } from 'react-router'

const initialState = {
    letterFrom: '',
    letterTo: '',
    message: '',
}

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        props.sendLetter(formData)
        setFormData(initialState)
        navigate(`/mailboxes/${formData.letterTo}`)
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value })
    }

    return (
        <>
            <h1>Send A Letter!</h1>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='letterFrom'>From: </label>
                    <input 
                    type='text'
                    id='letterFrom'
                    name='letterFrom'
                    value={formData.letterFrom}
                    onChange={handleChange}
                    />
                    <br></br>
                    <select
                    id="letterTo"
                    name="letterTo"
                    value={formData.letterTo}    
                    onChange={handleChange}      
                    >
                    <option value="">To:</option>
                        {props.mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>
                                {mailbox._id}. {mailbox.boxOwner}
                    </option>
                    ))}
                    </select>
                    <label htmlFor='message'>Message: </label>
                    <textarea 
                    id='message' 
                    name='message' 
                    value={formData.message} 
                    onChange={handleChange}
                    />
                    <button type='submit'>Send!</button>
                </form>
            </main>
        </>
    )
}

export default LetterForm