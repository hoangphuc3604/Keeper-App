import React, {useState} from 'react';

function NewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target

        setNote(prevNote => {
            return ({
                ...prevNote,
                [name]: value
            })
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })

        event.preventDefault()
    }

    return (
        <div>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea 
                    name="content" 
                    placeholder="Take a note..."
                    value={note.content}
                    onChange={handleChange}>
                </textarea>
                <button onClick={submitNote}>+</button>
            </form>
        </div>
    )
}

export default NewNote;