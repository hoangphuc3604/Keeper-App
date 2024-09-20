import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import NewNote from "./NewNote"
import notes from "../notes"

function App() {
    return <div>
        <Header />

        <NewNote />
        
        {notes.map((note) => <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />)}

        <Footer />
    </div>
}

export default App