import React, { useContext } from 'react';
import noteContext from '../context/notes/nodeContext';
import Noteitem from './Noteitem';

const Note = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className=" row cantainer my-3">
            <h1>Your Note</h1>
            {notes.map((note) => {
                return  <Noteitem note={note}/>
                
            })}

        </div>
    )
}

export default Note
