// src/App.jsx

import { Route, Routes } from 'react-router'
import { useState } from 'react'

import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import LetterForm from './components/LetterForm/LetterForm.jsx'



const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBoxData])
  }

  const sendLetter = (newLetterData) => {
    newLetterData._id = letters.length + 1
    setLetters([...letters, newLetterData])
  }
  return (
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h2>Home Page</h2>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/mailboxes/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
      <Route path='/letters/new-letter' element={<LetterForm mailboxes={mailboxes} sendLetter={sendLetter}/>} />
      <Route path='*' element={<h2>Sorry, no mail here!</h2>} />
    </Routes>
  
  </>
  )
};

export default App;

