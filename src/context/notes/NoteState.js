import NoteContext from './nodeContext';
import { useState } from 'react';

const NoteStatus = (props) => {
    const noteInitial = [
        {
          "_id": "66533d32e04ff233e0094a6a",
          "user": "66517582d97db624b597da43",
          "title": "my titile",
          "description": "wake up early",
          "tag": "personal",
          "date": "2024-05-26T13:46:26.025Z",
          "__v": 0
        },
        {
          "_id": "665441b0d453072059d1c317",
          "user": "66517582d97db624b597da43",
          "title": "my titile 2",
          "description": "wake up early second",
          "tag": "personallly yes",
          "date": "2024-05-27T08:17:52.390Z",
          "__v": 0
        },
        {
          "_id": "66533d32e04ff233e0094a6a",
          "user": "66517582d97db624b597da43",
          "title": "my titile",
          "description": "wake up early",
          "tag": "personal",
          "date": "2024-05-26T13:46:26.025Z",
          "__v": 0
        },
        {
          "_id": "665441b0d453072059d1c317",
          "user": "66517582d97db624b597da43",
          "title": "my titile 2",
          "description": "wake up early second",
          "tag": "personallly yes",
          "date": "2024-05-27T08:17:52.390Z",
          "__v": 0
        },
        {
          "_id": "66533d32e04ff233e0094a6a",
          "user": "66517582d97db624b597da43",
          "title": "my titile",
          "description": "wake up early",
          "tag": "personal",
          "date": "2024-05-26T13:46:26.025Z",
          "__v": 0
        },
        {
          "_id": "665441b0d453072059d1c317",
          "user": "66517582d97db624b597da43",
          "title": "my titile 2",
          "description": "wake up early second",
          "tag": "personallly yes",
          "date": "2024-05-27T08:17:52.390Z",
          "__v": 0
        },
        {
          "_id": "66533d32e04ff233e0094a6a",
          "user": "66517582d97db624b597da43",
          "title": "my titile",
          "description": "wake up early",
          "tag": "personal",
          "date": "2024-05-26T13:46:26.025Z",
          "__v": 0
        },
        {
          "_id": "665441b0d453072059d1c317",
          "user": "66517582d97db624b597da43",
          "title": "my titile 2",
          "description": "wake up early second",
          "tag": "personallly yes",
          "date": "2024-05-27T08:17:52.390Z",
          "__v": 0
        },
        {
          "_id": "66533d32e04ff233e0094a6a",
          "user": "66517582d97db624b597da43",
          "title": "my titile",
          "description": "wake up early",
          "tag": "personal",
          "date": "2024-05-26T13:46:26.025Z",
          "__v": 0
        },
        {
          "_id": "665441b0d453072059d1c317",
          "user": "66517582d97db624b597da43",
          "title": "my titile 2",
          "description": "wake up early second",
          "tag": "personallly yes",
          "date": "2024-05-27T08:17:52.390Z",
          "__v": 0
        },
      ]

      const [notes, setNotes]= useState(noteInitial)
        return(
            <NoteContext.Provider value={{notes, setNotes}}>
                    {props.children}
            </NoteContext.Provider>
        )
}

export default NoteStatus;
