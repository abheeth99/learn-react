import React from 'react';
import { NotesStore } from './NotesStore';

type NewNoteInputProps = {
    addNote: NotesStore["addNote"]
}

export const NewNotesInput: React.FC<NewNoteInputProps> = ({addNote}) =>{
    const [note, setNote] = React.useState("");

    const updateNote=(event: React.ChangeEvent<HTMLInputElement>)=> {
        setNote(event.target.value);
    }

    const onAddNoteClick = () =>{
        addNote(note);
        setNote("");
    }
    return(
        <div>
            <input value={note} type="text" name="note" placeholder="Enter note..." onChange={updateNote} />
            <button onClick={onAddNoteClick}>Add</button>
        </div>
    )
}