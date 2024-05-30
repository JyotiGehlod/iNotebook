import NoteContext from './nodeContext';
import { useState } from 'react';

const NoteStatus = (props) => {
  const host = 'http://localhost:5000';
  const noteInitial = [];
  
  //add note 
  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token"  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MTc1ODJkOTdkYjYyNGI1OTdkYTQzIn0sImlhdCI6MTcxNjY5ODY5NH0.2-EggWghfZ_X4-dP_G-g9gk3VmN-nBw7JcR0Ck4Xkws"
      }
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);

  }


  const [notes, setNotes] = useState(noteInitial);
  //add note 
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`localhost:5000/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token"  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MTc1ODJkOTdkYjYyNGI1OTdkYTQzIn0sImlhdCI6MTcxNjY5ODY5NH0.2-EggWghfZ_X4-dP_G-g9gk3VmN-nBw7JcR0Ck4Xkws"
      },
      body: JSON.stringify({title, description, tag}),
    });

    
    console.log("Adding a new note");

    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //delete note 
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token"  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MTc1ODJkOTdkYjYyNGI1OTdkYTQzIn0sImlhdCI6MTcxNjY5ODY5NH0.2-EggWghfZ_X4-dP_G-g9gk3VmN-nBw7JcR0Ck4Xkws"
      },
    });
    const json = response.json();
    console.log(json);

    console.log("delete this particular id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  // edit note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token"  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MTc1ODJkOTdkYjYyNGI1OTdkYTQzIn0sImlhdCI6MTcxNjY5ODY5NH0.2-EggWghfZ_X4-dP_G-g9gk3VmN-nBw7JcR0Ck4Xkws"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStatus;
