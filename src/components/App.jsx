import React, {useState} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import NewNote from "./NewNote"
import oNotes from "../notes"

function App() {
    const [notes, updateNotes] = useState(oNotes)

    function handleAdd(note) {
        updateNotes(prevNotes => [...prevNotes, {
            ...note,
            key: notes[notes.length - 1].key + 1
        }])
    }

    function handleDelete(title) {
        updateNotes(prevNotes => {    
            const noteIndex = prevNotes.findIndex(note => note.title === title)
                  
            if (noteIndex) {
                prevNotes.splice(noteIndex, 1)
            }

            return prevNotes
        })
    }

    return <div>
        <Header />

        <NewNote 
            onAdd={handleAdd}
        />
        
        {notes.map((note, index) => <Note 
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={handleDelete}
        />)}

        <Footer />
    </div>
}

export default App