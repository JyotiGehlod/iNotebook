import React, { useContext , useEffect } from 'react';
import noteContext from '../context/notes/nodeContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Note = () => {
    const context = useContext(noteContext);
    const { notes , getNotes} = context;
    useEffect(() => {
        getNotes();
      }, []);
    return (
        <>
        <AddNote />
        <div className=" row cantainer my-3">
            <h1>Your Note</h1>
            {notes.map((note) => {
                return  <Noteitem key={note._id} note={note}/>
                
            })}

        </div>
        </>
    )
}

export default Note
